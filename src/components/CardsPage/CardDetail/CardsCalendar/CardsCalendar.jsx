import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const CardsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <h5 className="cards-calendar-heading">Select checkout date</h5>
      <p className="cards-calendar-para">
        Add your travel dates for exact pricing
      </p>
      <div className="cards-calendar-container">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          inline
          className="cards-datepicker"
        />
      </div>
    </div>
  );
};

export default CardsCalendar;
