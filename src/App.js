import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import { Container } from "@mui/material";
import "./App.css";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container maxWidth={false} className="builder-app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="canvas">
          <Canvas />
        </div>
      </Container>
    </DndProvider>
  );
};

export default App;
