import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../bookingAPI";
import BookingForm from "../BookingForm";

const BookingPage = () => {
  const navigate = useNavigate();

  const SubmitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate({ pathname: "/src/components/pages/Confirmation.js" });
    } else {
      console.error();
    }
  };

  const updateTimes = (date) => {
    return fetchAPI(date);
  };

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={dispatch}
        submitForm={SubmitForm}
      />
    </>
  );
};

export default BookingPage;
