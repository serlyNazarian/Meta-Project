import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../../bookingAPI";
import BookingForm from "../BookingForm";

const updateTimes = (date) => {
  return date;
};

export { updateTimes };

const BookingPage = () => {

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if(success) {
      useNavigate({pathname: '/src/components/pages/Confirmation.js'})
    }
  };

  const currentDate = new Date();
  console.log('currentDate :>> ', currentDate);
  
  const output = new Date();

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm} />
    </>
  );
};

export default BookingPage;
