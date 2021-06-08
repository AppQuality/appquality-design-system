import { PaginationProps, PageItem } from "./PaginationProps";
import { Button, ButtonGroup } from "../button/Button";
import { generateShrinkedPages } from "./utils";
import { MouseEventHandler } from "react";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import styled from "styled-components";

export const DesktopPagination = ({
  onPageChange,
  current,
  maxPages,
  size = 3,
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

  const DesktopPaginationWrapper = styled.div`
    margin-bottom: ${(props) => props.theme.grid.spacing.default};
    text-align: center;
  `;

  return (
    <DesktopPaginationWrapper>
      <ButtonGroup>
        <Button
          flat={true}
          squared={true}
          onClick={() => onPageChange(current - 1)}
          key="prev"
          disabled={current === 1}
          data-test-id="prev"
        >
          <ChevronLeft />
        </Button>
        {pages.map((i, idx) => {
          let onClick: MouseEventHandler | undefined = () => i.action(i.page);
          return (
            <Button squared={true} flat={i.flat} onClick={onClick} key={idx}>
              {i.page}
            </Button>
          );
        })}
        <Button
          flat={true}
          squared={true}
          onClick={() => onPageChange(current + 1)}
          key="next"
          disabled={current >= maxPages}
          data-test-id="next"
        >
          <ChevronRight />
        </Button>
      </ButtonGroup>
    </DesktopPaginationWrapper>
  );
};
