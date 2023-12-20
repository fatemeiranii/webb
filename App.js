
import React, { useState } from "react";
import "./App3.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform necessary actions on form submission
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className=" name">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="email">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className=" message">
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="button-group">
          <button type="submit" className="send">
            Send
          </button>
          <button type="button" className="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

