import React from "react";
import { Paper, Typography, List, ListItem, Box } from "@mui/material";
import DraggableElement from "./DraggableElement";

const Sidebar = () => {
  const fontFamily =
    "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";

  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        height: "100%",
        overflowY: "auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        fontFamily, // Ensuring the entire Paper component inherits this font family
      }}
    >
      <Typography
        variant="h4"
        style={{
          marginBottom: "15px",
          color: "#333",
          fontFamily,
          fontWeight: 700,
          fontSize: "24px",
        }}
      >
        Drag Elements
      </Typography>

      <Typography
        variant="h6"
        style={{ margin: "20px 0 10px", color: "#333", fontFamily }}
      >
        Homepage:
      </Typography>
      <List>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="heading" content="Headline Text" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="paragraph" content="Subheadline Text" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="button" content="Button" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="list" content="Featured Products" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="list" content="Testimonials" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="list" content="Navigation Links" />
          </Box>
        </ListItem>
      </List>

      <Typography
        variant="h6"
        style={{ margin: "20px 0 10px", color: "#333", fontFamily }}
      >
        Navigation Menu:
      </Typography>
      <List>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="list" content="Home" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="list" content="About" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="list" content="Services" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="list" content="Blog" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="list" content="Contact" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="textbox" content="Search Bar" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="image" content="Logo Image" />
          </Box>
        </ListItem>
      </List>

      {/* About Page Section */}
      <Typography
        variant="h6"
        style={{ margin: "20px 0 10px", color: "#333", fontFamily }}
      >
        About Page:
      </Typography>
      <List>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="image" content="Company Logo" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="image" content="Team Member Images" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="paragraph" content="Team Bios" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement
              type="paragraph"
              content="Company Mission Statement"
            />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement
              type="list"
              content="Timeline of Company History"
            />
          </Box>
        </ListItem>
      </List>

      {/* Services/Products Page Section */}
      <Typography
        variant="h6"
        style={{ margin: "20px 0 10px", color: "#333", fontFamily }}
      >
        Services/Products Page:
      </Typography>
      <List>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="image" content="Service/Product Images" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement
              type="paragraph"
              content="Service/Product Descriptions"
            />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="paragraph" content="Pricing Information" />
          </Box>
        </ListItem>

        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="button" content="Contact Us" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="list" content="Category Filters" />
          </Box>
        </ListItem>
      </List>

      {/* Contact Page Section */}
      <Typography
        variant="h6"
        style={{ margin: "20px 0 10px", color: "#333", fontFamily }}
      >
        Contact Page:
      </Typography>
      <List>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="textbox" content="Name Field" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="textbox" content="Email Field" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="textbox" content="Message Field" />
          </Box>
        </ListItem>

        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="paragraph" content="Phone Number" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="paragraph" content="Email Address" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="paragraph" content="Physical Address" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement
              type="textbox"
              content="Map Integration (e.g., Google Maps)"
            />
          </Box>
        </ListItem>
      </List>

      {/* Blog/Resources Section */}
      <Typography
        variant="h6"
        style={{ margin: "20px 0 10px", color: "#333", fontFamily }}
      >
        Blog/Resources Section:
      </Typography>
      <List>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="image" content="Blog Post Images" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="heading" content="Blog Post Titles" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="paragraph" content="Blog Post Excerpts" />
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{ width: "100%" }}>
            <DraggableElement type="list" content="Categories for Posts" />
          </Box>
        </ListItem>
      </List>
    </Paper>
  );
};

export default Sidebar;
