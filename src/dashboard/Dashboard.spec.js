import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";
import Controls from '../controls/Controls';
import Display from '../display/Display';
let wrapper;
/* 
beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
}); */

// 2. Gate cannot be closed or opened if it is locked
test("Gate cannot be opened or closed when in locked state", () => {
  const dashboard = rtl.render(<Dashboard />);
  const closeButton = dashboard.getByText(/close gate/i);
  const lockButton = dashboard.getByText(/lock gate/i);
  rtl.fireEvent.click(closeButton);
  rtl.fireEvent.click(lockButton);
  expect(lockButton).toBeEnabled();
  expect(closeButton).toBeDisabled();
});

// 3. shows the controls and the display

test("Controls and display both render", () => {
    const dashboard = rtl.render(<Dashboard />);
    const controls = rtl.render(<Controls />);
    const display = rtl.render(<Display />);
  });

  
