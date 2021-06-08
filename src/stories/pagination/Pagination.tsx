import { PaginationProps } from "./PaginationProps";
import { DesktopPagination } from "./DesktopPagination";
import { MobilePagination } from "./MobilePagination";
import { useWindowSize } from "../../shared/effects";

export const Pagination = (args: PaginationProps) => {
  useWindowSize();
  if (window.matchMedia("only screen and (max-width: 768px)").matches) {
    return <MobilePagination {...args} />;
  }
  return <DesktopPagination {...args} />;
};
