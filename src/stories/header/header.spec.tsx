import { render, screen } from "@testing-library/react";
import { testUser } from "./_data";
import "../../i18n";
import {
  LoadingHeader,
  LoggedInHeader,
  LoggedOutHeader,
} from "./Header.stories";

describe("logged out site-header", () => {
  it("should render with the login text only", () => {
    render(<LoggedOutHeader {...LoggedOutHeader.args} />);
    expect(screen.getByText("login")).toBeVisible();
  });
});

describe("logged in site-header user info", () => {
  it("should render with the correct user informations only", () => {
    render(<LoggedInHeader {...LoggedInHeader.args} />);
    expect(screen.queryByText("login")).toBeNull();
    expect(
      screen.getByText(`${testUser.name} ${testUser.surname}`)
    ).toBeVisible();
    expect(screen.getByText(`(T${testUser.id})`)).toBeVisible();
  });
});

describe("loading site-header user info", () => {
  it("should only render a skeleton animation only", () => {
    render(<LoadingHeader {...LoadingHeader.args} />);
    expect(screen.queryByText("login")).toBeNull();
    expect(
      screen.queryByText(`${testUser.name} ${testUser.surname}`)
    ).toBeNull();
    expect(screen.queryByText(`(T${testUser.id})`)).toBeNull();
    expect(screen.getByTestId("skeleton-p")).toBeVisible();
  });
});
