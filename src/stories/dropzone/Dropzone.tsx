import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { DropzoneProps } from "./_types";
import { Text } from "../typography/Typography";
import { ReactComponent as UploadIcon } from "./assets/uploadIcon.svg";

export const Dropzone = ({
  text,
  accept,
  maxFiles,
  minSize,
  maxSize,
  onAccepted: onAccepted,
  onRejected: onRejected,
}: DropzoneProps) => {
  const [dragStyle, setDragStyle] = useState<boolean>(false);
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept,
    maxFiles,
    minSize,
    maxSize,
  });

  useEffect(() => {
    fileRejections.length && onRejected(fileRejections);
  }, [fileRejections]);

  useEffect(() => {
    acceptedFiles.length && onAccepted(acceptedFiles);
  }, [acceptedFiles]);

  return (
    <StyledDropzone
      className={`dropzone ${dragStyle ? "dropzone-hover" : ""}`}
      onDragOver={() => setDragStyle(true)}
      onDragLeave={() => setDragStyle(false)}
      onDrop={() => setDragStyle(false)}
    >
      <div {...getRootProps({ className: "dropzone-area" })}>
        <input {...getInputProps()} />
        <div className="dropzone-content">
          <UploadIcon />
          <Text className="dropzone-text aq-mt-2">{text}</Text>
        </div>
      </div>
    </StyledDropzone>
  );
};

const StyledDropzone = styled.div`
  height: 8em;
  border-width: 1px;
  border-radius: 8px;
  border-color: black;
  border-style: dashed;
  outline: none;
  transition: border 0.24s ease-in-out;
  margin: 0.5em 0 1.5em;

  &:focus,
  &:active {
    border: none;
    box-shadow: inset 0 0 1em 0 ${(p) => p.theme.colors.purple100};
    .dropzone-area {
      .dropzone-content {
        color: ${(p) => p.theme.colors.gray400} !important;
      }
      .dropzone-text {
        color: ${(p) => p.theme.colors.gray400} !important;
      }
    }
  }

  .dropzone-area {
    width: 100%;
    height: 100%;

    .dropzone-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${(p) => p.theme.variants.primary};

      .dropzone-text {
        color: ${(p) => p.theme.palette.secondary};
        text-decoration: underline;
      }
    }
  }

  &.dropzone-hover {
    border: none;
    box-shadow: inset 0px 0px 16px 0px ${(p) => p.theme.colors.purple100};

    .dropzone-area {
      .dropzone-content {
        color: ${(p) => p.theme.colors.gray400} !important;
      }
      .dropzone-text {
        color: ${(p) => p.theme.colors.gray400} !important;
      }
    }
  }
`;
