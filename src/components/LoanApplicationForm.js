import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const LoanApplicationForm = ({ setQuoteData, prefilledData }) => {
  const navigate = useNavigate();

  // State to store form data, initialized with prefilled data if available
  const [formData, setFormData] = useState({
    title: "Mr.",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    amountRequired: 5000,
    term: 24, // Default term in months
    dateOfBirth: "",
  });

  // Populate formData with prefilledData when available
  useEffect(() => {
    if (prefilledData) {
      setFormData(prefilledData);
    }
  }, [prefilledData]);

  // Update form data when the user inputs values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Update slider value for loan amount
  const handleSliderChange = (e) => {
    setFormData({ ...formData, amountRequired: parseInt(e.target.value, 10) });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuoteData(formData);
    navigate("/quote");
  };

  return (
    <div className="quote-calculator">
      <h2>Quote Calculator</h2>
      <form onSubmit={handleSubmit}>
        {/* Loan Amount Slider */}
        <div className="slider-container">
          <label className="slider-label">${formData.amountRequired}</label>
          <input
            type="range"
            name="amountRequired"
            min="2100"
            max="15000"
            step="100"
            value={formData.amountRequired}
            onChange={handleSliderChange}
          />
          <div className="slider-range">
            <span>$2,100</span>
            <span>How much do you need?</span>
            <span>$15,000</span>
          </div>
        </div>

        {/* Title and Name Fields */}
        <div className="form-row">
          <label>Title:</label>
          <select name="title" value={formData.title} onChange={handleChange}>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
          </select>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email and Mobile Fields */}
        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date of Birth Field */}
        <div className="form-row">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={formData.dateOfBirth || ""}
            onChange={handleChange}
            required
          />
        </div>

        {/* Loan Term Slider */}
        <div className="slider-container">
          <label className="slider-label">{formData.term} months</label>
          <input
            type="range"
            name="term"
            min="6"
            max="60"
            step="1"
            value={formData.term}
            onChange={(e) =>
              setFormData({ ...formData, term: parseInt(e.target.value, 10) })
            }
          />
          <div className="slider-range">
            <span>6 months</span>
            <span>Loan Term</span>
            <span>60 months</span>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="calculate-quote-button">
          Calculate Quote
        </button>
        <p className="credit-score-note">
          Quote does not affect your credit score
        </p>
      </form>
    </div>
  );
};

export default LoanApplicationForm;
