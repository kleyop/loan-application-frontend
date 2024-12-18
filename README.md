# Loan Application Quote Calculator - Frontend

This repository contains the **React.js frontend** for the Loan Application Quote Calculator. It allows users to enter loan details, view repayment quotes, and submit loan applications.

---

## **Features**

1. **Loan Application Form**
   - Input personal details: name, email, mobile, date of birth, loan amount, and loan term.
   - Adjust loan amount and term using sliders.
   - Product dropdown to select different loan products.

2. **Quote Summary**
   - Displays loan quote details.
   - Allows editing of the form before submission.

3. **Success Screen**
   - Displays a confirmation message for a successful loan application.

4. **API Integration**
   - Submits loan application data to the backend.

---

## **Technologies Used**

- **React.js**: Frontend framework.
- **React Router v6**: For navigation between screens.
- **Axios**: To make API calls.
- **CSS**: For custom styling.

---

## **Project Structure**

/src ├── components │ ├── LoanApplicationForm.js # Loan input form │ ├── QuoteSummary.js # Displays loan summary │ └── SuccessScreen.jsx # Success confirmation screen ├── App.js # Main application logic ├── index.js # React entry point └── styles.css # Custom styles

---

## **Installation**

## **Setup Instructions**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repository-url.git
   cd loan-application

2. Install frontend dependencies:   
    npm install

3. Start the React development server:
    npm start

4. Open your browser and navigate to:
    http://localhost:3000
