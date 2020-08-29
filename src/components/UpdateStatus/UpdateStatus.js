import React, { useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import { Avatar } from "@material-ui/core";
import "./updateStatus.css";

export default function UpdateStatus() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="updateStatus">
      <div className="updateStatus__form">
        <Avatar src="https://miro.medium.com/max/3150/2*4An60Vc-r2PGnYJZp78T7g.jpeg" />
        <form>
          <input
            className="updateStatus__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`what's on your mind?`}
          />
          <input
            className="updateStatus__input"
            placeholder="Enter Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="updateStatus__bottom">
        <div className="updateStatus__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="updateStatus__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="updateStatus__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
      </div>
    </div>
  );
}
