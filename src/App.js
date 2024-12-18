import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoanApplicationForm from "./components/LoanApplicationForm";
import QuoteSummary from "./components/QuoteSummary";
import SuccessScreen from "./components/SuccessScreen";

function App() {
  const [quoteData, setQuoteData] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Loan Application Form */}
          <Route
            path="/"
            element={
              <LoanApplicationForm
                setQuoteData={setQuoteData}
                prefilledData={quoteData}
              />
            }
          />

          {/* Quote Summary */}
          <Route
            path="/quote"
            element={
              quoteData ? (
                <QuoteSummary quoteData={quoteData} />
              ) : (
                <p>No data available. Please return to the application form.</p>
              )
            }
          />

          {/* Success Screen */}
          <Route path="/success" element={<SuccessScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
