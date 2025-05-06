import React, { useState } from "react";

const dateSuggestions = {
  3: {
    title: "✅ For 3-Day Events (0 Leaves Required)",
    dates: [
      "Mar 14 (Fri) – Mar 16 (Sun) → Includes Holi + Weekend",
      "Apr 18 (Fri) – Apr 20 (Sun) → Includes Good Friday + Weekend",
      "Aug 15 (Fri) – Aug 17 (Sun) → Includes Independence Day + Weekend",
    ],
  },
  4: {
    title: "✅ For 4-Day Events (Only 1 Leave Required)",
    dates: [
      "Mar 13 – Mar 16",
      "Mar 14 – Mar 17",
      "Apr 17 – Apr 20",
      "Apr 18 – Apr 21",
      "Aug 14 – Aug 17",
      "Aug 15 – Aug 18",
      "Oct 2 – Oct 5 → Includes Gandhi Jayanti + Weekend",
      "Oct 18 – Oct 21 → Includes Diwali + Weekend",
      "Dec 25 – Dec 28 → Includes Christmas + Weekend",
    ],
  },
  5: {
    title: "✅ For 5-Day Events (Only 2 Leaves Required)",
    dates: [
      "Mar 12 – Mar 16",
      "Mar 13 – Mar 17",
      "Mar 14 – Mar 18",
      "Apr 16 – Apr 20",
      "Apr 17 – Apr 21",
      "Apr 18 – Apr 22",
      "Aug 13 – Aug 17",
      "Aug 14 – Aug 18",
      "Aug 15 – Aug 19",
      "Oct 1 – Oct 5",
    ],
  },
  6: {
    title: "✅ For 6-Day Events (Only 3 Leaves Required)",
    dates: [
      "Mar 11 – Mar 16",
      "Mar 12 – Mar 17",
      "Mar 13 – Mar 18",
      "Mar 14 – Mar 19",
      "Apr 15 – Apr 20",
      "Apr 16 – Apr 21",
      "Apr 17 – Apr 22",
      "Apr 18 – Apr 23",
      "Aug 12 – Aug 17",
      "Aug 13 – Aug 18",
    ],
  },
};

const DateBox = () => {
  const [days, setDays] = useState("");
  const [suggestion, setSuggestion] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const numDays = parseInt(days, 10);
    if (numDays >= 3 && numDays <= 6) {
      setSuggestion(dateSuggestions[numDays]);
    } else {
      setSuggestion({ title: "❌ Invalid Input", dates: ["Please enter a number between 3 and 6."] });
    }
  };

  return (
    <div className="abc">
      <h1 className="text-center mt-4 mb-4">📅 Date Recommendation System</h1>
      <div
        className="container bg-light p-4 border rounded shadow"
        style={{ maxWidth: "600px" }}
      >
        <h5 className="mb-3">Enter Number of Days</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="Enter number of days (3 to 6)"
              required
              min="3"
              max="6"
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Show Best Event Dates
          </button>
        </form>

        {suggestion && (
          <div className="mt-5">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <strong>{suggestion.title}</strong>
              </div>
              <ul className="list-group list-group-flush">
                {suggestion.dates.map((date, index) => (
                  <li key={index} className="list-group-item">
                    {date}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateBox;
