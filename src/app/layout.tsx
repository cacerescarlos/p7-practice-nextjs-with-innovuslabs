"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "@/theme/customTheme";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav style={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
          <a href="/" style={{ marginRight: "1rem" }}>Inicio</a>
          <a href="/exercises/exercise-1" style={{ marginRight: "1rem" }}>Ejercicio 1</a>
          <a href="/exercises/exercise-2" style={{ marginRight: "1rem" }}>Ejercicio 2</a>
          <a href="/exercises/exercise-3">Ejercicio 3</a>
        </nav>
        <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
