import { expect, test } from "vitest";
import { render, screen }  from "@testing-library/react";
import Search from "./Search";

test ('renders Search component', async() => {
  render(<Search token="testToken" />);
  
  const inputElement = await screen.getByRole('textbox');
  const buttonElements = await screen.getAllByRole('button'); // Use getAllByRole
  
  expect(inputElement).toBeInTheDocument();
  expect(buttonElements.length).toBe(3); // Assert the correct number of buttons

  // Optionally, you can also assert on each button separately
  buttonElements.forEach(button => {
    expect(button).toBeInTheDocument();
  });
})
