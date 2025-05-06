import React, { useState } from "react";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [paid, setPaid] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();

    // Basic validation (front-end only)
    if (cardNumber && cardHolder && expiry && cvv) {
      setPaid(true);
    }
  };

  return (
    <div className="container mt-5 p-4 border rounded shadow-sm" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">💳 Payment Gateway</h2>
      <form onSubmit={handlePayment}>
        <div className="mb-3">
          <label className="form-label">Cardholder Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. John Doe"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="xxxx xxxx xxxx xxxx"
            maxLength={19}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Expiry Date</label>
            <input
              type="text"
              className="form-control"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">CVV</label>
            <input
              type="password"
              className="form-control"
              placeholder="123"
              maxLength={4}
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Pay Now
        </button>
      </form>

      {paid && (
        <div className="alert alert-success mt-4" role="alert">
          ✅ Payment Successful! Thank you for your purchase.
        </div>
      )}
    </div>
  );
};

export default Payment;
