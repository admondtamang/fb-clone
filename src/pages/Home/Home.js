import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import Feed from "../../components/Feed/Feed";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
        <SideBar />
      </div>
    </>
  );
}
