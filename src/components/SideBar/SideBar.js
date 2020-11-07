import React from "react";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import ChatIcon from "@material-ui/icons/Chat";
import PeopleIcon from "@material-ui/icons/People";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { useSelector } from "react-redux";
import "./sidebar.css";
export default function SideBar() {
  const user = useSelector((state) => state.user);
  return (
    <div className="sidebar">
      <SidebarRow title={user.displayName} src={user.photoURL} />
      <SidebarRow title="COVID-19 Information" Icon={LocalHospitalIcon} />
      <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Chat" Icon={ChatIcon} />
      <SidebarRow title="People" Icon={PeopleIcon} />
      <SidebarRow title="Video" Icon={VideoLibraryIcon} />
    </div>
  );
}
