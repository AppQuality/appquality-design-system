import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { DropzoneProps } from "./_types";
import { Text } from "../typography/Typography";
import { ReactComponent as UploadIcon } from "./assets/uploadIcon.svg";
import { ReactComponent as MaxFilesIcon } from "./assets/maxFilesIcon.svg";

export const Dropzone = ({
  description,
  accept,
  maxFiles,
  maxFilesText,
  disabled,
  onAccepted,
  onRejected,
}: DropzoneProps) => {
  const [hoverStyle, setHoverStyle] = useState<boolean>(false);
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept,
    maxFiles,
    disabled: disabled || maxFiles === 0,
  });

  useEffect(() => {
    fileRejections.length && onRejected(fileRejections);
  }, [fileRejections]);

  useEffect(() => {
    acceptedFiles.length && onAccepted(acceptedFiles);
  }, [acceptedFiles]);

  return (
    <StyledDropzone
      className={`dropzone ${hoverStyle ? "dropzone-hover" : ""} ${
        disabled || maxFiles === 0 ? "disabled" : ""
      }`}
      onDragOver={() => setHoverStyle(true)}
      onDragLeave={() => setHoverStyle(false)}
      onDrop={(e) => {
        e.preventDefault();
        setHoverStyle(false);
      }}
    >
      <div {...getRootProps({ className: "dropzone-area" })}>
        <input {...getInputProps()} />
        <div className="dropzone-content">
          {maxFiles === 0 && maxFilesText ? (
            <>
              <MaxFilesIcon />
              <Text className="dropzone-text aq-mt-2">{maxFilesText}</Text>
            </>
          ) : (
            <>
              <UploadIcon />
              <Text className="dropzone-text text-underline aq-mt-2">
                {description}
              </Text>
            </>
          )}
        </div>
      </div>
    </StyledDropzone>
  );
};

const StyledDropzone = styled.div`
  height: 8em;
  border: 1px dashed ${(p) => p.theme.variants.primary};
  border-radius: 8px;
  outline: none;
  transition: border 0.24s ease-in-out;
  padding: 0.5em 1em;

  .text-underline {
    text-decoration: underline;
  }

  &:focus,
  &:active,
  &.disabled,
  &.dropzone-hover {
    .dropzone-area {
      .dropzone-content {
        color: ${(p) => p.theme.colors.elementGeneric} !important;
      }
      .dropzone-text {
        color: ${(p) => p.theme.colors.disabledFont} !important;
      }
    }
  }

  &:focus:not(.disabled),
  &:active:not(.disabled),
  &.dropzone-hover:not(.disabled) {
    border: none;
    box-shadow: inset 2px 4px 18px 2px ${(p) => p.theme.colors.purple100};
  }

  &.disabled {
    border: 1px dashed ${(p) => p.theme.colors.elementGeneric};
  }

  .dropzone-area {
    width: 100%;
    height: 100%;
    outline: none;

    .dropzone-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${(p) => p.theme.palette.secondary};

      .dropzone-text {
        color: ${(p) => p.theme.palette.secondary};
        text-align: center;
      }
    }
  }
`;
