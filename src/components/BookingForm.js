import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/BookingForm.css";

const BookingForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [occasions, setOccasions] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option key={times}>{times}</option>)
  );

  const { availableTimes, submitForm, time } = props;

  function handleDateChange(e) {
    setDate(e.target.value);

    let stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(
      availableTimes.map((times) => <option key={times}>{times}</option>)
    );
  }

  const handleInputChange = () => {
    if (date && time && guests && occasions) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <form className="reservation-form" onSubmit={submitForm}>
      <h4 className="booking-title">Booking Form</h4>
      <div className="booking-form-card">
        <label htmlFor="firstName" className="input-label">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="input"
        />
        <label htmlFor="lastName" className="input-label">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          required
          minLength={2}
          maxLength={50}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="input"
        />
        <label htmlFor="lastName" className="input-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          minLength={4}
          maxLength={200}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <label htmlFor="lastName" className="input-label">
          Phone Number
        </label>
        <input
          type="tel"
          id="tel"
          placeholder="(xxx)-xxx-xxxx"
          required
          minLength={10}
          maxLength={25}
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          className="input"
        />
        <label htmlFor="res-date" className="input-label">
          Select date
        </label>
        <input
          pattern="\d{4}-\d{2}-\d{2}"
          value={date}
          onChange={(e) => {
            handleDateChange(e);
            handleInputChange();
          }}
          type="date"
          id="res-date"
          className="input"
          required
        />
        <label htmlFor="res-time" className="input-label">
          Select time
        </label>
        <select id="res-time" required>
          {finalTime}
        </select>
        <label htmlFor="guests" className="input-label">
          Number of guests
        </label>
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
          className="input"
          required
        />
        <label htmlFor="occasion" className="input-label">
          Occasion
        </label>
        <select
          multiple={false}
          id="occasion"
          value={occasions}
          onChange={(e) => {
            setOccasions(e.target.value);
            handleInputChange();
          }}
        >
          <option value="none">None</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="engagement">Engagement</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="preferences" className="input-label">
          Seating preferences
        </label>
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option value="none">None</option>
          <option value="indoors">Indoors</option>
          <option value="outdoorpatio">Outdoor (Patio)</option>
          <option value="outdoorsidewalk">Outdoor (Sidewalk)</option>
        </select>
        <label htmlFor="comments" className="input-label">
          Additional Comments
        </label>
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Addictional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <input
          type="submit"
          value="Make your reservation"
          onSubmit={submitForm}
          disabled={!isFormValid}
        />
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your request.
          </p>
        </small>
        <Link className="action-button" to="/confirmation">
          Book Table
        </Link>
      </div>
    </form>
  );
};

export default BookingForm;
