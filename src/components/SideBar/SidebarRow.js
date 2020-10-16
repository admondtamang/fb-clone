import React from "react";
import { Avatar } from "@material-ui/core";
import "./sidebarRow.css";
export default function SidebarRow({ title, src, Icon }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}

      {Icon && <Icon style={{ color: "#2e81f4" }} />}
      <h4>{title}</h4>
    </div>
  );
}
