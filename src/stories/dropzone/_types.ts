import { Accept } from "react-dropzone";

export interface DropzoneProps {
  text: string;
  accept?: Accept;
  maxFiles?: number;
  onUpload: (files: File[]) => void;
  onDelete: (file: File) => void;
}
