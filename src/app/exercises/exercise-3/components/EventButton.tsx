"use client";
import React from "react";
import { Button, Stack } from "@mui/material";
import { useAnalytics } from "../AnalyticsContext";

export default function EventButton() {
  const { logClick, resetAnalytics } = useAnalytics();

  return (
    <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
      {/* Botón para registrar clics */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          transition: "all 0.3s",
          "&:hover": {
            backgroundColor: "#1565C0",
            transform: "scale(1.1)",
          },
        }}
        onClick={logClick}
      >
        ¡REGISTRAR CLICK!
      </Button>

      {/* Botón para reiniciar */}
      <Button
        variant="outlined"
        color="error"
        size="large"
        sx={{
          transition: "all 0.3s",
          "&:hover": {
            backgroundColor: "#FFCDD2",
            color: "#B71C1C",
            transform: "scale(1.05)",
          },
        }}
        onClick={resetAnalytics}
      >
        🔄 Reiniciar
      </Button>
    </Stack>
  );
}
