import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  // const [people, setPeople] = useState(1);
  const [occasions, setOccasions] = useState(["Birthday", "Anniversary"]);
  // const [preferences, setPreferences] = useState("");
  // const [comments, setComments] = useState("");

  const { availableTimes, submitForm } = props;

  // function handleDateChange(e) {
  //   setDate(e.target.value);

  //   let stringify = e.target.value;
  //   const date = new Date(stringify);

  //   props.updateTimes(date);
  // }

  return (
    <form className="reservation-form">
      <h4>Booking Form</h4>
      <label htmlFor="res-date">Choose date</label>
      <input value={date} onChange={setDate} type="date" id="res-date" />
      {/* <label htmlFor="res-time">Choose time</label> */}
      {/* <select id="res-time">
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select> */}
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      {/* <label htmlFor="occasion">Occasion</label> */}
      {/* <select id="occasion" value={occasions} onChange={setOccasions}>
        {occasions.map((occasion) => (
          <option key={occasion} value={occasion}>
            {occasion}
          </option>
        ))}
      </select> */}
      <input
        type="submit"
        value="Make your reservation"
        onSubmit={submitForm}
      />
    </form>
  );
};

export default BookingForm;
