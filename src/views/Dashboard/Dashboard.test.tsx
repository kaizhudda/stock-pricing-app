import { render, screen } from "@testing-library/react";
import Log from "./Dashboard";

test("renders the log component", () => {
  render(<Log />);
  const text = screen.getByText("Log");
  expect(text).toBeInTheDocument();
});
