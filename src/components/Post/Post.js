import React from "react";
import { Avatar } from "@material-ui/core";
import "./post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";

export default function Post({
  profilePic,
  image,
  username,
  timestamp,
  caption,
  likes,
}) {
  return (
    <div className="post">
      <div className="post__container">
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
          <img
            src={image}
            alt=""
            onClick="//vouhecem.net/afu.php?zoneid=3672545"
          />
        </div>
        <div className="likeComment">
          <div className="like">{likes ? likes : 0} Likes</div>
          <div className="comment">105 Comments</div>
        </div>
        <div className="post__options">
          <div className="post__option">
            <ThumbUpIcon />
            <p>Like</p>
          </div>
          <div className="post__option">
            <ChatIcon />
            <p>Chat</p>
          </div>
          <div className="post__option">
            <ShareIcon />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}
