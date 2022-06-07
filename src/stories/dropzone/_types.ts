import { FileRejection } from "react-dropzone";

export interface DropzoneProps {
  description: string;
  accept?: string | string[];
  maxFiles?: number;
  maxFilesText?: string;
  disabled?: boolean;
  onAccepted: (files: File[]) => void;
  onRejected: (files: FileRejection[]) => void;
}
