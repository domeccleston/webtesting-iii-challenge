import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

// 1. Gate defaults to unlocked and open

test("Gate defaults to open unlocked state", () => {
  const display = rtl.render(<Display />);
  expect(display.getByText(/open/i)).toBeInTheDocument();
  expect(display.getByText(/unlocked/i)).toBeInTheDocument();
});
