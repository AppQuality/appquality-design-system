import { render, screen } from "@testing-library/react";
import { BasicPaginationArgs } from "./Pagination.stories.args";
import { Pagination } from "./Pagination";
import { ThemeProvider } from "styled-components";
import { aqBootstrapTheme } from "../theme/defaultTheme";

const firstPagePagination = { ...BasicPaginationArgs };
firstPagePagination.current = 1;
const lastPagePagination = { ...BasicPaginationArgs };
lastPagePagination.current = lastPagePagination.maxPages;

jest.mock("react-bootstrap-icons", () => ({
  __esModule: true,
  ChevronLeft: () => "ChevronLeft",
  ChevronRight: () => "ChevronRight",
}));
describe("Desktop pagination", () => {
  beforeAll(() => {
    window.matchMedia =
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener: function () {},
          removeListener: function () {},
        };
      };
  });

  it("should render the last page", () => {
    render(
      <ThemeProvider theme={aqBootstrapTheme}>
        <Pagination {...BasicPaginationArgs} />
      </ThemeProvider>
    );
    expect(screen.getByText(BasicPaginationArgs.maxPages)).toBeInTheDocument();
  });

  it("should render the current page", () => {
    render(
      <ThemeProvider theme={aqBootstrapTheme}>
        <Pagination {...BasicPaginationArgs} />
      </ThemeProvider>
    );
    expect(screen.getByText(BasicPaginationArgs.current)).toBeInTheDocument();
  });

  it("should render the prev and next link if not first or max", () => {
    render(
      <ThemeProvider theme={aqBootstrapTheme}>
        <Pagination {...BasicPaginationArgs} />
      </ThemeProvider>
    );
    expect(screen.getByText("ChevronRight")).toBeInTheDocument();
    expect(screen.getByText("ChevronLeft")).toBeInTheDocument();
  });

  it("should not render the prev if first", () => {
    render(
      <ThemeProvider theme={aqBootstrapTheme}>
        <Pagination {...firstPagePagination} />
      </ThemeProvider>
    );
    expect(screen.getByText("ChevronLeft")).toBeInTheDocument();
    expect(screen.getByText("ChevronLeft")).toHaveAttribute("disabled");
    expect(screen.getByText("ChevronRight")).toBeInTheDocument();
    expect(screen.getByText("ChevronRight")).not.toHaveAttribute("disabled");
  });

  it("should not render the next if last", () => {
    render(
      <ThemeProvider theme={aqBootstrapTheme}>
        <Pagination {...lastPagePagination} />
      </ThemeProvider>
    );
    expect(screen.getByText("ChevronLeft")).toBeInTheDocument();
    expect(screen.getByText("ChevronLeft")).not.toHaveAttribute("disabled");
    expect(screen.getByText("ChevronRight")).toBeInTheDocument();
    expect(screen.getByText("ChevronRight")).toHaveAttribute("disabled");
  });
});
