import React, { useState } from "react";

const Help = () => {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setSubmitted(true);
    }
  };

  return (
    <div className="container mt-5 p-4 border rounded shadow-sm" style={{ maxWidth: "600px" }}>
      <h2 className="mb-3">🛟 Help & Support</h2>
      <p>If you have any questions, feel free to ask us here. We’ll get back to you as soon as possible!</p>
      <form onSubmit={handleSupportSubmit}>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Type your question or concern here..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSubmitted(false);
            }}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit Query
        </button>
      </form>

      {submitted && (
        <div className="alert alert-info mt-3" role="alert">
          ✅ Thank you for reaching out! We’ve received your query: <br />
          <strong>{query}</strong>
        </div>
      )}
    </div>
  );
};

export default Help;
