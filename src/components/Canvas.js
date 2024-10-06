import React, { useState } from "react";
import { useDrop } from "react-dnd";
import {
  Paper,
  Typography,
  Button,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Canvas = () => {
  const [droppedElements, setDroppedElements] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editContent, setEditContent] = useState("");

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ELEMENT",
    drop: (item) => {
      setDroppedElements((prev) => [...prev, item]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditContent(droppedElements[index].content);
  };

  const handleSave = (index) => {
    const updatedElements = [...droppedElements];
    updatedElements[index].content = editContent;
    setDroppedElements(updatedElements);
    setEditingIndex(null);
    setEditContent("");
  };

  const handleRemove = (index) => {
    setDroppedElements((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Paper
      ref={drop}
      sx={{
        width: "100%",
        minHeight: "93vh",
        padding: "20px",
        border: "3px dashed #007bff",
        backgroundColor: isOver ? "#e9f5ff" : "#ffffff",
        boxSizing: "border-box",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        style={{
          marginBottom: "15px",
          color: "#333",
          fontFamily:
            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",

          fontSize: "24px",
        }}
      >
        Drop Elements Here
      </Typography>
      {droppedElements.map((element, index) => (
        <Box
          key={index}
          sx={{
            marginBottom: "10px",
            position: "relative",
            padding: "10px",
            border: "1px solid #ced4da",
            borderRadius: "5px",
            backgroundColor: "#f1f3f5",
            display: "flex", // Flex to align edit/delete icons and content
            alignItems: "center",
            justifyContent: "space-between", // Space between content and icons
          }}
        >
          {editingIndex === index ? (
            <>
              <TextField
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleSave(index)}
                sx={{ marginLeft: "10px" }}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleRemove(index)}
                sx={{ marginLeft: "10px" }}
              >
                Remove
              </Button>
            </>
          ) : (
            <>
              {element.type === "heading" && (
                <Typography
                  variant="h4"
                  style={{
                    fontFamily:
                      "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  }}
                >
                  {element.content}
                </Typography>
              )}
              {element.type === "paragraph" && (
                <Typography
                  style={{
                    fontFamily:
                      "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  }}
                >
                  {element.content}
                </Typography>
              )}
              {element.type === "image" && (
                <img src={element.content} alt="Dropped" width="100%" />
              )}
              {element.type === "button" && (
                <Button variant="contained" sx={{ marginTop: "10px" }}>
                  {element.content}
                </Button>
              )}
              {element.type === "list" && (
                <ul
                  style={{
                    fontFamily:
                      "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  }}
                >
                  <li>{element.content}</li>
                </ul>
              )}
              {element.type === "footer" && (
                <Typography
                  variant="body2"
                  style={{
                    fontFamily:
                      "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  }}
                >
                  {element.content}
                </Typography>
              )}
              <div>
                <IconButton
                  onClick={() => handleEdit(index)}
                  sx={{ color: "blue" }} // Change edit icon color to blue
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  onClick={() => handleRemove(index)}
                  sx={{ color: "red" }} // Change delete icon color to red
                >
                  <DeleteOutlinedIcon />
                </IconButton>
              </div>
            </>
          )}
        </Box>
      ))}
    </Paper>
  );
};

export default Canvas;
