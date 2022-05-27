import styled from "styled-components";
import { Card } from "../card/Card";
import { Text } from "../typography/Typography";
import { ReactComponent as UploadFile } from "./assets/uploadFile.svg";
import { ReactComponent as UploadSuccess } from "./assets/uploadSuccess.svg";
import { ReactComponent as UploadFailed } from "./assets/uploadFailed.svg";
import { ReactComponent as UploadTrash } from "./assets/uploadTrash.svg";
import { FileInfoCardProps } from "./_types";

export const FileInfoCard = ({
  fileInfo,
  status,
  onDelete,
}: FileInfoCardProps) => {
  return (
    <StyledFileInfoCard>
      <Card className={`file-card ${status}`} bodyClass="file-card-body" shadow>
        <div className="file-card-left">
          <UploadFile className="aq-mr-2" />
          <Text className="file-info">{fileInfo}</Text>
        </div>
        <div className="file-card-right">
          {status === "success" ? (
            <UploadSuccess className="aq-mr-2" />
          ) : status === "failed" ? (
            <UploadFailed className="aq-mr-2" />
          ) : (
            <StyledUploading className="aq-mr-2" />
          )}
          {onDelete && (
            <UploadTrash className="file-delete" onClick={onDelete} />
          )}
        </div>
      </Card>
    </StyledFileInfoCard>
  );
};

const StyledFileInfoCard = styled.div`
  .file-card {
    background: ${(p) => p.theme.colors.gray50};
    border: none;

    &.failed {
      background: ${(p) => p.theme.colors.red400}26;
    }

    .file-card-body {
      display: flex;
      padding: 1em;

      svg {
        width: 39px;
        height: 39px;
      }

      .file-card-left {
        display: flex;
        align-items: center;
        width: 70%;
        .file-info {
          color: ${(p) => p.theme.palette.primary};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .file-card-right {
        display: flex;
        width: 30%;
        align-items: center;
        justify-content: flex-end;

        .file-delete {
          cursor: pointer;
        }
      }
    }
  }

  @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
    .file-card {
      .file-card-body {
        svg {
          width: 21px;
          height: 21px;
        }
      }
    }
  }
`;

const StyledUploading = styled.div`
  border: 8px solid ${(p) => p.theme.palette.warning};
  border-radius: 50%;
  border-top: 8px solid ${(p) => p.theme.palette.warning}73;
  width: 39px;
  height: 39px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
    width: 21px;
    height: 21px;
    border-width: 4px;
  }
`;
