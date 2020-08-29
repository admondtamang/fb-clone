import React from "react";
import StoryReel from "../StoryReel/StoryReel";
import UpdateStatus from "../UpdateStatus/UpdateStatus";
import Post from "../Post/Post";
import "./feed.css";
export default function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <UpdateStatus />
      <Post
        profilePic="https://miro.medium.com/max/3150/2*4An60Vc-r2PGnYJZp78T7g.jpeg"
        caption="What's up"
        timestamp="2020/02/02"
        username="admond"
        image="https://pbs.twimg.com/media/DF4RU4WVoAAB2sP.jpg"
      />
      <Post
        profilePic="https://miro.medium.com/max/3150/2*4An60Vc-r2PGnYJZp78T7g.jpeg"
        caption="What's up"
        timestamp="2020/02/02"
        username="admond"
        image="https://pbs.twimg.com/media/DF4RU4WVoAAB2sP.jpg"
      />
    </div>
  );
}
