import { PaginationProps } from "./PaginationProps";
import { Button } from "../button/Button";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import styled from "styled-components";

const MobilePaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MobilePaginationTextWrapper = styled.span`
  font-weight: bold;
`;

export const MobilePagination = ({
  onPageChange,
  current,
  maxPages,
  mobileText = (current, total) => `Page ${current} / ${total}`,
}: PaginationProps) => {
  return (
    <MobilePaginationWrapper>
      <Button
        disabled={current <= 1}
        squared={true}
        onClick={() => onPageChange(current - 1)}
      >
        <ChevronLeft />
      </Button>
      <MobilePaginationTextWrapper>
        {maxPages > 0 ? mobileText(current, maxPages) : null}
      </MobilePaginationTextWrapper>
      <Button
        disabled={current >= maxPages}
        squared={true}
        onClick={() => onPageChange(current + 1)}
      >
        <ChevronRight />
      </Button>
    </MobilePaginationWrapper>
  );
};
