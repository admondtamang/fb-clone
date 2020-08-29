import React from "react";
import Search from "@material-ui/icons/Search";
import Home from "@material-ui/icons/Home";
import Flag from "@material-ui/icons/Flag";
import Add from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import "./header.css";
export default function Header() {
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
          <Home fontSize="large" />
        </div>
        <div className="header__option">
          <Flag fontSize="large" />
        </div>
        <div className="header__option">
          <Home fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src="https://miro.medium.com/max/3150/2*4An60Vc-r2PGnYJZp78T7g.jpeg" />
          <h4>Admond Tamang</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}
