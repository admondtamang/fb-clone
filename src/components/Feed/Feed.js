import React, { useState, useEffect } from "react";
import StoryReel from "../StoryReel/StoryReel";
import UpdateStatus from "../UpdateStatus/UpdateStatus";
import Post from "../Post/Post";
import "./feed.css";

import db from "../../firebase";
export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
        console.log(posts);
      });
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <UpdateStatus />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          caption={post.data.caption}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}
