import React, { useState } from "react";

const ClassForm = () => {
  const [state, setState] = useState({
    name: "",
    type: "",
    time: "",
    duration: "",
    level: 0,
    location: "",
    attend: 0,
    size: 0,
  });

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <div>
      <h1>Create a New Class</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.name}
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Class Type:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.type}
            name="type"
            id="type"
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Class Time:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.time}
            name="time"
            id="time"
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Class Duration:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.duration}
            name="duration"
            id="duration"
          />
        </div>
        <div className="form-group">
          <label htmlFor="level">Intensity Level :</label>
          <br />
          <input
            onChange={handleChange}
            value={state.level}
            name="level"
            id="level"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Class location:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.location}
            name="location"
            id="location"
          />
        </div>
        <div className="form-group">
          <label htmlFor="attend">Number of Attendees:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.attend}
            name="attend"
            id="attend"
          />
        </div>
        <div className="form-group">
          <label htmlFor=" size">Class size:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.size}
            name="size"
            id="size"
          />
        </div>
        {/* {
                errorMessage && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {errorMessage}</div>
            } */}
        <button>Create Class</button>
      </form>
    </div>
  );
};

export default ClassForm;
