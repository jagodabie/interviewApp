import { render, fireEvent, waitForElement } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import React from 'react';
import {SearchInput} from'./SearchInput'

test('renders component', async() => {
    const { getByText } = render(<SearchInput />);
    expect(getByText("Please fill a title")).toBeInTheDocument();

  });
  test("Title displaying", async () => {
    const { getByLabelText, getByText, debug } = render(<SearchInput />);
    const input = getByLabelText("search");
    fireEvent.change(input, { target: { value: "soon" } });
    const textNode = await waitForElement(() => getByText("Title: Coming Soon"));
    expect(textNode).toBeInTheDocument();
});