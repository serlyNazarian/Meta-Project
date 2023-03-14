import React, { useReducer, useState } from "react";
import BookingForm from "../BookingForm";

const updateTimes = (date) => {
  return date;
};

export { updateTimes };

const BookingPage = () => {
  // const [availableTimes, setAvailableTimes] = useState([
  //   "17:00",
  //   "18:00",
  //   "19:00",
  //   "20:00",
  //   "21:00",
  //   "22:00",
  // ]);

  const currentDate = new Date();
  console.log('currentDate :>> ', currentDate);
  
  const output = new Date();

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
};

export default BookingPage;
