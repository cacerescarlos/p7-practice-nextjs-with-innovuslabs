"use client";
import React from "react";
import { useAnalytics } from "../AnalyticsContext";
import { Box, Typography, Paper } from "@mui/material";

export default function AnalyticsPanel() {
  const { state } = useAnalytics();

  return (
    <Paper
      elevation={5}
      sx={{ mt: 4, width: "100%", p: 3, borderRadius: 4, textAlign: "center" }}
    >
      <Typography variant="h5" color="success.main" gutterBottom>
        🔍 Análisis en Tiempo Real
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        🖱️ <strong>Hovers registrados:</strong> {state.hoverEvents}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        👆 <strong>Clics registrados:</strong> {state.clicks}
      </Typography>
    </Paper>
  );
}
