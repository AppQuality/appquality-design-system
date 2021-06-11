import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Select } from "./Select";
import { aqBootstrapTheme } from "../theme/defaultTheme";
import { basicOptions } from "./_data";

describe("Basic Select should render options correctly", () => {
  it("There should be as many options as provided", () => {
    const { container } = render(
      <ThemeProvider theme={aqBootstrapTheme}>
        <Select
          name="my-select"
          options={basicOptions}
          label="Basic Select"
          value={{ value: "chocolate", label: "Chocolate" }}
          onChange={(val) => {
            console.log(val);
          }}
        />
      </ThemeProvider>
    );
    const th = container.querySelectorAll("thead th");
    expect(th.length).toEqual(0);
  });
});
