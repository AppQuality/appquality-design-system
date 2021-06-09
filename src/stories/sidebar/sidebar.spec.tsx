import { render, screen } from "@testing-library/react";
import { BasicSidebar } from "./Sidebar.stories";
import { BasicSidebarArgs } from "./Sidebar.stories.args";

const closedSidebarArgs = { ...BasicSidebarArgs };
const openSidebarArgs = { ...closedSidebarArgs };
openSidebarArgs.open = true;
describe("Closed sidebar", () => {
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

  it("should render the children", () => {
    render(<BasicSidebar {...closedSidebarArgs} />);

    expect(
      screen.getByText(
        'Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        { exact: false }
      )
    ).toBeInTheDocument();
  });

  it("should render an icon for each item", async () => {
    render(<BasicSidebar {...closedSidebarArgs} />);
    const buttonIcons = await screen.findAllByTestId("icon-button");
    let l = 0;
    if (closedSidebarArgs && closedSidebarArgs.items) {
      l = closedSidebarArgs.items.length;
    }
    expect(buttonIcons).toHaveLength(l);

    buttonIcons.forEach((b) => {
      expect(b.querySelector("svg")).toBeInTheDocument();
    });
  });

  it("should render the current language", async () => {
    render(<BasicSidebar {...closedSidebarArgs} />);
    let lang = "";
    if (
      closedSidebarArgs &&
      closedSidebarArgs.languages &&
      closedSidebarArgs.languages.current &&
      closedSidebarArgs.languages.current.lang
    ) {
      lang = closedSidebarArgs.languages.current.lang;
    }
    expect(screen.getByText(lang)).toBeInTheDocument();
  });
});

describe("Open sidebar", () => {
  it("should render the other languages", async () => {
    render(<BasicSidebar {...openSidebarArgs} />);
    closedSidebarArgs.languages.others.forEach(
      (l: { lang: string; onClick: Function }) => {
        expect(screen.getByText(l.lang)).toBeInTheDocument();
      }
    );
  });
});
