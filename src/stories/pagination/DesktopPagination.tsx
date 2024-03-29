import { MouseEventHandler } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import styled from "styled-components";
import { Button, ButtonGroup } from "../button/Button";
import { PageItem, PaginationProps } from "./PaginationProps";
import { generateShrinkedPages } from "./utils";

const DesktopPaginationWrapper = styled.div`
  text-align: center;
  ${Button}.hoverable:hover {
    background: ${(props) => props.theme.colors.gray100};
    color: ${(props) => props.theme.palette.secondary};
  }
`;

export const DesktopPagination = ({
  onPageChange,
  current,
  maxPages,
  size = 3,
  className,
}: PaginationProps) => {
  let pages: Array<PageItem> = [];
  if (maxPages <= 5) {
    pages = Array.from(Array(maxPages).keys()).map((i) => ({
      page: i + 1,
      flat: i + 1 !== current,
      action: onPageChange,
    }));
  } else {
    pages = generateShrinkedPages(current, maxPages, size, onPageChange);
  }

  return (
    <DesktopPaginationWrapper className={className}>
      <ButtonGroup>
        <Button
          flat={true}
          squared={true}
          onClick={() => onPageChange(current - 1)}
          key="prev"
          kind="primary"
          disabled={current === 1}
          data-test-id="prev"
        >
          <ChevronLeft />
        </Button>
        {pages.map((i, idx) => {
          let onClick: MouseEventHandler | undefined = () => i.action(i.page);
          return (
            <Button
              squared={true}
              flat={i.flat}
              className={i.flat ? "hoverable" : ""}
              onClick={onClick}
              key={idx}
              kind="primary"
            >
              {i.page}
            </Button>
          );
        })}
        <Button
          flat={true}
          squared={true}
          onClick={() => onPageChange(current + 1)}
          key="next"
          kind="primary"
          disabled={current >= maxPages}
          data-test-id="next"
        >
          <ChevronRight />
        </Button>
      </ButtonGroup>
    </DesktopPaginationWrapper>
  );
};
