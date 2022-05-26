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
  onUpload,
  onDelete,
}: DropzoneProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [dragStyle, setDragStyle] = useState<boolean>(false);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept,
    maxFiles,
  });

  // const fileLists = files.length ? files.map(file => (
  //     <li key={file.name}>
  //         {file.name} - {file.size} bytes
  //         <div onClick={() => removeFile(file)} style={{ cursor: "pointer", marginLeft: "6px", textAlign: "center" }}>X</div>
  //     </li>
  // )) : <></>;

  const removeFile = (file: File) => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
    onDelete(file);
  };

  useEffect(() => {
    const isOverThreshold =
      maxFiles && files.length + acceptedFiles.length <= maxFiles;

    if (!maxFiles || isOverThreshold) {
      setFiles([...files, ...acceptedFiles]);
      onUpload(acceptedFiles);
    }
  }, [acceptedFiles]);

  return (
    <>
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
      {/* <div>
                <h4>Files</h4>
                <ul>{fileLists}</ul>
            </div> */}
    </>
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
