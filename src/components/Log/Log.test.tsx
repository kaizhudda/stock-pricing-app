import { render, screen } from "@testing-library/react";
import Log from "./Log";

test("renders the log component", () => {
  render(<Log />);
  const text = screen.getByText("Log");
  expect(text).toBeInTheDocument();
});
