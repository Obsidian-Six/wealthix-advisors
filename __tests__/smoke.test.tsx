import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
function Dummy() {
  return <div>Hello</div>;
}

describe("smoke", () => {
  it("renders Hello text", () => {
    render(<Dummy />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
