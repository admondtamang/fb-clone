import React from "react";
import Search from "@material-ui/icons/Search";
import Home from "@material-ui/icons/Home";
import Flag from "@material-ui/icons/Flag";
import Add from "@material-ui/icons/Add";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SubscriptionsOutlined from "@material-ui/icons/SubscriptionsOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import firebase from "firebase";

import Tooltip from "@material-ui/core/Tooltip";
import "./header.css";
import { useSelector } from "react-redux";
export default function Header() {
  const user = useSelector((state) => state.user);
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
          alt="fb"
        />
        <div className="header__input">
          <Search />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <Tooltip title="Home">
            <Home fontSize="large" />
          </Tooltip>
        </div>

        <div className="header__option">
          <Tooltip title="Pages">
            <Flag fontSize="large" />
          </Tooltip>
        </div>
        <div className="header__option">
          <Tooltip title="Videos">
            <SubscriptionsOutlined fontSize="large" />
          </Tooltip>
        </div>
        <div className="header__option">
          <Tooltip title="Shop">
            <StorefrontOutlinedIcon fontSize="large" />
          </Tooltip>
        </div>
        <div className="header__option">
          <Tooltip title="Community">
            <SupervisedUserCircleIcon fontSize="large" />
          </Tooltip>
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} sizes="x" />
          <h4>{user.displayName.split(" ")[0]}</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <ChatBubbleIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton
          onClick={() => {
            firebase
              .auth()
              .signOut()
              .then(function () {
                // Sign-out successful.
                alert("signout sucess");
              })
              .catch(function (error) {
                // An error happened.
              });
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}
