"use client";
import React from "react";
import { List, ListItem, ListItemText, Paper } from "@mui/material";
import { useAnalytics } from "../AnalyticsContext";

const items = [
  "📖 Libro",
  "💻 Laptop",
  "📱 Teléfono",
  "⌨️ Teclado",
  "🖥️ Monitor",
];

export default function EventList() {
  const { logHover } = useAnalytics();

  return (
    <Paper elevation={4} sx={{ maxWidth: 400, margin: "auto", p: 2 }}>
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              margin: "0.5rem 0",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#e0f7fa",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s ease",
            }}
            onMouseEnter={logHover}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
