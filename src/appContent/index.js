import React from "react";
import Frame from "./Frame";
import Routes from "../routes";
import Board from './Board';
const AppContent = () => {
  return (
    <Frame>
      <Routes />
      <Board/>
    </Frame>
  );
};

export default AppContent;
