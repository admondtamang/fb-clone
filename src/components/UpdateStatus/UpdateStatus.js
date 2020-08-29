import React, { useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import { Avatar } from "@material-ui/core";
import "./updateStatus.css";
import db from "../../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";

export default function UpdateStatus() {
  const user = useSelector((state) => state.user);
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      caption: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });
  };
  return (
    <div className="updateStatus">
      <div className="updateStatus__form">
        <Avatar src={user.photoURL} />
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
