import { render, screen } from "@testing-library/react";
import BookTitle from "./BookTitle";

it("should render booktitle", () => {
  render(<BookTitle bookName="employee" />);
  expect(screen.getByText("employee")).toBeInTheDocument();
});
