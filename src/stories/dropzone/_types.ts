import { Accept, FileRejection } from "react-dropzone";

export interface DropzoneProps {
  text: string;
  accept?: Accept;
  maxFiles?: number;
  minSize?: number;
  maxSize?: number;
  onAccepted: (files: File[]) => void;
  onRejected: (files: FileRejection[]) => void;
}
