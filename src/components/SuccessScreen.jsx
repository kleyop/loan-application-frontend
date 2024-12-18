import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const SuccessScreen = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Navigate back to the Loan Application Form
  };

  return (
    <div className="success-screen">
      <h2>🎉 Application Successful!</h2>
      <p>Your loan application has been submitted successfully.</p>
      <p>We will contact you shortly with further details.</p>
      <button onClick={handleGoBack} className="success-button">
        Back to Home
      </button>
    </div>
  );
};

export default SuccessScreen;
