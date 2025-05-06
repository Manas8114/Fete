import React, { useState } from 'react';
import axios from 'axios';

const Event = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "𝓜𝓪𝓻𝓻𝓲𝓪𝓰𝓮", image: "./images/event1.png", details: "Details about the marriage event." },
    { id: 2, title: "𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂 𝓟𝓪𝓻𝓽𝔂", image: "./images/event11.png", details: "Details about the birthday party." },
    { id: 3, title: "𝓒𝓸𝓷𝓬𝓮𝓻𝓽", image: "./images/event3.png", details: "Details about the concert." },
    { id: 4, title: "𝓜𝓪𝓽𝓬𝓱 𝓢𝓬𝓻𝓮𝓮𝓷𝓲𝓷𝓰", image: "./images/event4.png", details: "Details about the match screening." },
    { id: 5, title: "𝓒𝓸𝓷𝓯𝓮𝓻𝓮𝓷𝓬𝓮", image: "./images/event5.png", details: "Details about the conference." },
    { id: 6, title: "𝓕𝓪𝓶𝓲𝓵𝔂 𝓖𝓪𝓽𝓱𝓮𝓻𝓲𝓷𝓰", image: "./images/event6.png", details: "Details about the family gathering." },
    { id: 7, title: "𝓚𝓲𝓽𝓽𝔂 𝓟𝓪𝓻𝓽𝔂", image: "./images/event7.png", details: "Details about the kitty party." },
    { id: 8, title: "𝓑𝓪𝓬𝓱𝓮𝓵𝓸𝓻𝓼 𝓟𝓪𝓻𝓽𝔂", image: "./images/event8.png", details: "Details about the bachelors party." },
    { id: 9, title: "𝓐𝓻𝓽 𝓔𝔁𝓱𝓲𝓫𝓲𝓽𝓲𝓸𝓷𝓼", image: "./images/event9.png", details: "Details about the art exhibitions." },
  ]);

  const [editingEventId, setEditingEventId] = useState(null);
  const [viewingEventId, setViewingEventId] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState('');

  const handleView = (id) => {
    setViewingEventId(viewingEventId === id ? null : id);
  };

  const handleEdit = (id) => {
    setEditingEventId(editingEventId === id ? null : id);
    const event = events.find(event => event.id === id);
    if (event) {
      setUpdatedDetails(event.details);
    }
  };

  const handleSave = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/events/${id}`, {
        details: updatedDetails
      });
      if (response.status === 200) {
        setEvents(events.map(event =>
          event.id === id ? { ...event, details: updatedDetails } : event
        ));
        setEditingEventId(null);
      }
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}><b>Create an Event</b></h1>
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {events.map((event) => (
            <div key={event.id} className="col">
              <div className="card shadow-sm">
                <img src={event.image} className="card-img-top" alt={event.title} />
                <div className="card-body">
                  <p className="card-text">{event.title}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleView(event.id)}>
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleEdit(event.id)}>
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                  {viewingEventId === event.id && (
                    <div className="mt-3">
                      <p><strong>Details:</strong> {event.details}</p>
                    </div>
                  )}
                  {editingEventId === event.id && (
                    <div className="mt-3">
                      <textarea
                        className="form-control"
                        rows="3"
                        value={updatedDetails}
                        onChange={(e) => setUpdatedDetails(e.target.value)}
                      ></textarea>
                      <button className="btn btn-sm btn-primary mt-2" onClick={() => handleSave(event.id)}>
                        Save
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr style={{ border: "2.5px solid rgb(0, 0, 0)", width: "100%", marginTop: "2rem" }} />
    </div>
  );
};

export default Event;
