import { test, expect } from "@playwright/experimental-ct-react17";
import { DateInput } from ".";

test.describe("DateInput", () => {
  test("should render an input tag and a button to open a datepicker", async ({
    page,
    mount,
  }) => {
    const component = await mount(<DateInput id="datepicker" />);
    component.locator("input").click();
    expect(component).toBeTruthy();
  });
  test("should print a placeholder if any", async ({ page, mount }) => {});
  test("should accept a date in a specific format", async ({
    page,
    mount,
  }) => {});
});
