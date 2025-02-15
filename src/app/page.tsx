"use client";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 6 }}>
      <Typography variant="h2" color="primary" gutterBottom>
        🛠️ Prueba Técnica - Frontend Engineer 🚀
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Aplicación desarrollada con Next.js, React, TypeScript, MUI y Capacitor.
      </Typography>

      <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 3 }}>
        <Link href="/exercises/exercise-1" passHref>
          <Button variant="contained" color="primary" size="large">
            Ejercicio 1: Next.js + MUI
          </Button>
        </Link>

        <Link href="/exercises/exercise-2" passHref>
          <Button variant="contained" color="secondary" size="large">
            Ejercicio 2: Capacitor
          </Button>
        </Link>

        <Link href="/exercises/exercise-3" passHref>
          <Button variant="contained" color="error" size="large">
            Ejercicio 3: React Hooks
          </Button>
        </Link>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="body2" color="textSecondary">
          Desarrollado por: Carlos Caceres | {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
}
