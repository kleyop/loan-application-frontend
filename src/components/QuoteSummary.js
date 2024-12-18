import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const QuoteSummary = ({ quoteData }) => {
  const navigate = useNavigate();

  const {
    title,
    firstName,
    lastName,
    email,
    mobile,
    amountRequired,
    term,
    dateOfBirth,
  } = quoteData;

  const establishmentFee = 300.0;
  const interest = amountRequired * 0.1; // Example interest calculation
  const totalRepayments = amountRequired + interest + establishmentFee;
  const monthlyRepayments = totalRepayments / term;

  const blacklistedMobileNumbers = ["1234567890", "0987654321"];
  const blacklistedEmailDomains = ["baddomain.com", "spam.com"];

  const handleApplyNow = async () => {
    // Validation Logic
    const today = new Date();
    const dob = new Date(dateOfBirth);
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    if (age < 18) {
      alert("You must be at least 18 years old to apply.");
      return;
    }

    if (blacklistedMobileNumbers.includes(mobile)) {
      alert("Your mobile number is blacklisted. Please use a different number.");
      return;
    }

    const emailDomain = email.split("@")[1];
    if (blacklistedEmailDomains.includes(emailDomain)) {
      alert("Your email domain is blacklisted. Please use a different email.");
      return;
    }

    // API Call and Success Navigation
    const applicationData = {
      title,
      firstName,
      lastName,
      email,
      mobile,
      amountRequired,
      term,
      dateOfBirth,
      repaymentAmount: totalRepayments,
      establishmentFee,
      totalInterest: interest,
    };

    try {
      const response = await axios.post(
        "https://localhost:44382/api/Application",
        applicationData
      );

      // console.log("Application successfully submitted:", response.data);
      // alert("Application submitted successfully!");
      navigate("/success"); // Navigate to success screen
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("There was an issue submitting your application. Please try again.");
    }
  };

  const handleEdit = () => {
    navigate(-1); // Simulate browser's back button
  };

  return (
    <div className="quote-summary">
      <h2>Your Quote</h2>
      <div>
        <p className="section-title">
          Your Information &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span
            className="edit-link"
            onClick={handleEdit}
            style={{ cursor: "pointer", color: "#00c853", marginLeft: "10px" }}
          >
            Edit
          </span>
        </p>
        <div className="detail">
          <strong>Name:</strong> {title} {firstName} {lastName}
        </div>
        <div className="detail">
          <strong>Email:</strong> {email}
        </div>
        <div className="detail">
          <strong>Mobile:</strong> {mobile}
        </div>
      </div>
      <div>
        <p className="section-title">Finance Details
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span
            className="edit-link"
            onClick={handleEdit}
            style={{ cursor: "pointer", color: "#00c853", marginLeft: "10px" }}
          >
          Edit
          </span>
        </p>
        <div className="detail">
          <strong>Finance Amount:</strong> ${amountRequired} over {term} months
        </div>
        <div className="detail">
          <strong>Repayments From:</strong> ${monthlyRepayments.toFixed(2)} Monthly
        </div>
      </div>
      <button className="apply-now-button" onClick={handleApplyNow}>
        Apply Now
      </button>
      <p className="disclaimer">
        Total repayments ${totalRepayments.toFixed(2)}, made up of an
        establishment fee of $300.00, interest of ${interest.toFixed(2)}. The
        repayment amount is based on the variables selected and is subject to
        our assessment, suitability, and terms and conditions.
      </p>
    </div>
  );
};

export default QuoteSummary;
