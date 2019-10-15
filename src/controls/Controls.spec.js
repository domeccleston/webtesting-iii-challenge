import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Controls from './Controls';

describe("provide buttons to toggle closed and locked states", () => {
    test("controls component contains buttons with correct labels", () => {
        const controls = rtl.render(<Controls />);
        expect(controls.getByText(/lock gate/i))
        expect(controls.getByText(/lock gate/i))
    })
})