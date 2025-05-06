import React, { useState } from "react";

const Notes = () => {
  const [note, setNote] = useState("");
  const [notesList, setNotesList] = useState([]);

  const handleAddNote = (e) => {
    e.preventDefault();
    if (note.trim() === "") return;

    setNotesList([...notesList, note]);
    setNote("");
  };

  const handleDeleteNote = (indexToDelete) => {
    const updatedNotes = notesList.filter((_, index) => index !== indexToDelete);
    setNotesList(updatedNotes);
  };

  return (
    <div className="container mt-5 p-4 border rounded shadow-sm" style={{ maxWidth: "600px" }}>
      <h2 className="mb-3">📝 Your Notes</h2>
      <form onSubmit={handleAddNote} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Write your note here..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button className="btn btn-success" type="submit">Add Note</button>
        </div>
      </form>

      {notesList.length === 0 ? (
        <p className="text-muted">No notes added yet.</p>
      ) : (
        <ul className="list-group">
          {notesList.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {item}
              <button className="btn btn-sm btn-danger" onClick={() => handleDeleteNote(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notes;
