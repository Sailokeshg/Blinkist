import { render, screen } from "@testing-library/react";
import BannerItemTwo  from "./BannerItemTwo";

it("shoudl render explore book heading", () => {
  render(<BannerItemTwo />);
  expect(
    screen.getByText(
      "Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start."
    )
  ).toBeInTheDocument();
});
