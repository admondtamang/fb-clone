import React from "react";
import "./story.css";
import { Avatar } from "@material-ui/core";

export default function Story({ image, profileSrc, title, main }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      {profileSrc && <Avatar src={profileSrc} className="story__avatar" />}
      <h4 style={{ color: main && "black" }}>{title}</h4>
    </div>
  );
}
