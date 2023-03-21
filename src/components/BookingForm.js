import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasions, setOccasions] = useState(["Birthday", "Anniversary"]);
  // const [preferences, setPreferences] = useState("");
  // const [comments, setComments] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const { availableTimes, submitForm, time } = props;

  // function handleDateChange(e) {
  //   setDate(e.target.value);

  //   let stringify = e.target.value;
  //   const date = new Date(stringify);

  //   props.updateTimes(date);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = () => {
    if (date && time && guests && occasions) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <h4>Booking Form</h4>
      <label htmlFor="res-date">Choose date</label>
      <input
        pattern="\d{4}-\d{2}-\d{2}"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          handleInputChange();
        }}
        type="date"
        id="res-date"
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => {
          setGuests(e.target.value);
          handleInputChange();
        }}
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasions}
        onChange={(e) => {
          setOccasions(e.target.value);
          handleInputChange();
        }}
      >
        {occasions.map((occasion) => (
          <option key={occasion} value={occasion}>
            {occasion}
          </option>
        ))}
      </select>
      <input
        type="submit"
        value="Make your reservation"
        onSubmit={submitForm}
        disabled={!isFormValid}
      />
    </form>
  );
};

export default BookingForm;
