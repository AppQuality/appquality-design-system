export interface FileInfoCardProps {
  fileInfo: string;
  status: "success" | "failed" | "uploading";
  onDelete?: () => void;
}
