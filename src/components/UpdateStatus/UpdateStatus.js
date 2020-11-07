import React, { useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import { Avatar, Button, ModalManager } from "@material-ui/core";
import "./updateStatus.css";
import db from "../../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import PhotoIcon from "@material-ui/icons/Photo";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

export default function UpdateStatus() {
  const user = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
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
    setIsOpen(false);
  };
  return (
    <div className="updateStatus">
      <div className="updateStatus__form">
        <Avatar src={user.photoURL} />
        <form>
          <input
            className="updateStatus__input"
            placeholder={`what's on your mind?, ${
              user.displayName.split(" ")[0]
            }`}
            onClick={() => setIsOpen(true)}
          />
          <Modal
            open={isOpen}
            close={handleClose}
            className="updateStatus__modal"
          >
            <input
              className="updateStatus__input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`what's on your mind?`}
              onClick={() => setIsOpen(true)}
            />
            <input
              className="updateStatus__input"
              placeholder="Enter Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Post
            </Button>
          </Modal>
        </form>
      </div>

      <div className="updateStatus__bottom">
        <div className="updateStatus__option">
          <VideocamIcon style={{ color: "red" }} />
          <h5>Live Video</h5>
        </div>
        <div className="updateStatus__option">
          <PhotoIcon style={{ color: "green" }} />
          <h5>Photos/Video</h5>
        </div>
        <div className="updateStatus__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h5>Feeling/Activity</h5>
        </div>
      </div>
    </div>
  );
}
