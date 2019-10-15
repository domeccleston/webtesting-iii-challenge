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

// 4. Display 'closed' if the closed prop is true and 'open' otherwise
test("gate displays closed when rendered with closed prop", () => {
    const closedGate = rtl.render(<Display closed={true} />);
    expect(closedGate.getByText(/closed/i)).toBeInTheDocument();
    const openGate = rtl.render(<Display closed={false} />);
    expect(openGate.getByText(/open/i)).toBeInTheDocument();
})

// 5. Display 'locked' if the locked prop is true and 'unlocked' otherwise

test("gate displays locked when rendered with locked prop", () => {
    const lockedGate = rtl.render(<Display locked={true} />);
    expect(lockedGate.getByText(/locked/i)).toBeInTheDocument();
    const unlockedGate = rtl.render(<Display locked={false} />);
    expect(unlockedGate.getByText(/unlocked/i)).toBeInTheDocument();
})

// 6. Alter classes when locked or unlocked to use red-led class rather than green-led:
// not implementing this test as Gabe advises against testing class lists, and previous tests
// already cover whether UI is updating to reflect changes in component state   