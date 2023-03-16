import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import BookingForm from "./components/BookingForm";
import { updateTimes } from "./components/pages/BookingPage";

describe("App component", () => {
  test("renders header, main, and footer components", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const header = getByTestId("header");
    const main = getByTestId("main");
    const footer = getByTestId("footer");

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});

test('Renders the bookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Booking Form");
  expect (headingElement).toBeInTheDocument();
});

test("output is a date object", () => {
  const output = new Date();

  expect(output).toBeInstanceOf(Date);
  expect(output.getTime()).toBeCloseTo(new Date().getTime(), -2);
});

test("updateTimes returns the input date", () => {
  const inputDate = new Date();

  const outputDate = updateTimes(inputDate);

  expect(outputDate).toEqual(inputDate);
});
