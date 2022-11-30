import { render, screen } from "@testing-library/react";
import Log from "./Summary";

test("renders the log component", () => {
  render(<Log />);
  const text = screen.getByText("Log");
  expect(text).toBeInTheDocument();
});
