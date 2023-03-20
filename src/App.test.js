import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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

test("Renders the bookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Booking Form");
  expect(headingElement).toBeInTheDocument();
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

it("renders the form without errors", () => {
  render(<BookingForm />);
});

it("updates the date input value when changed", () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText("Choose date");
  fireEvent.change(dateInput, { target: { value: "2023-03-25" } });
  expect(dateInput).toHaveValue("2023-03-25");
});

it("updates the number of guests input value when changed", () => {
  render(<BookingForm />);
  const guestsInput = screen.getByPlaceholderText("1");
  fireEvent.change(guestsInput, { target: { value: "4" } });
  expect(guestsInput).toHaveValue("4");
});

it("updates the occasion input value wen changed", () => {
  render(<BookingForm />);
  const occasionsInput = screen.getByLabelText("Occasion");
  fireEvent.change(occasionsInput, { target: { value: "Birthday" } });
  expect(occasionsInput).toHaveValue("Birthday");
});

it("disables the submit button when the form is invalid", () => {
  render(<BookingForm />);
  const submitButton = screen.getByRole("button", {
    name: "Make your reservation",
  });
  expect(submitButton).toBeDisabled();

  const dateInput = screen.getByLabelText("Choose date");
  const guestsInput = screen.getByLabelText("Number of guests");
  const occasionsInput = screen.getByLabelText("Occasion");

  fireEvent.change(dateInput, { target: { value: "2023-03-25" } });
  fireEvent.change(guestsInput, { target: { value: "4" } });
  fireEvent.change(occasionsInput, { target: { value: "Birthday" } });

  expect(submitButton).toBeEnabled();
});
