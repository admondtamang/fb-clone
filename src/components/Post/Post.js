import React from "react";
import { Avatar } from "@material-ui/core";
import "./post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

export default function Post({
  profilePic,
  image,
  username,
  timestamp,
  caption,
}) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__caption">
        <p>{caption}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
      </div>
    </div>
  );
}
