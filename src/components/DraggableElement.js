import React from "react";
import { useDrag } from "react-dnd";
import { Paper, Typography } from "@mui/material";

const DraggableElement = ({ type, content }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ELEMENT",
    item: { type, content },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Paper
      ref={drag}
      elevation={isDragging ? 4 : 2}
      sx={{
        padding: "15px",
        marginBottom: "10px",
        backgroundColor: isDragging ? "#d1e7dd" : "#f5f5f5",
        cursor: "move",
        borderRadius: "5px",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "#e2e6ea",
        },
      }}
    >
      <Typography variant="body1">{content}</Typography>
    </Paper>
  );
};

export default DraggableElement;
