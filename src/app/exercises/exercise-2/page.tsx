"use client";
import React, { useState } from "react";
import { getCurrentLocation } from "./capacitorService";
import { Box, Typography, Button, Paper, CircularProgress, Alert } from "@mui/material";

interface Location {
    latitude: number;
    longitude: number;
}

export default function Exercise2Page() {
    const [location, setLocation] = useState<Location | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGetLocation = async () => {
        setLoading(true);
        setError(null);
        try {
            const loc = await getCurrentLocation();
            setLocation(loc);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ maxWidth: 500, margin: "2rem auto", textAlign: "center" }}>
            <Typography variant="h4" color="primary" gutterBottom>
                Geolocalización - Capacitor
            </Typography>

            {/* Botón para obtener ubicación */}
            <Button
                variant="contained"
                color="secondary"
                onClick={handleGetLocation}
                disabled={loading}
                sx={{ mb: 3 }}
            >
                📍 Obtener Ubicación
            </Button>

            {/* Indicador de carga */}
            {loading && <CircularProgress color="primary" />}

            {/* Mostrar ubicación si está disponible */}
            {location && (
                <Paper elevation={4} sx={{ mt: 3, p: 2, textAlign: "left" }}>
                    <Typography variant="h6" color="success.main">📍 Ubicación Actual:</Typography>
                    <Typography variant="body1"><strong>Latitud:</strong> {location.latitude}</Typography>
                    <Typography variant="body1"><strong>Longitud:</strong> {location.longitude}</Typography>
                </Paper>
            )}

            {/* Mostrar error si ocurre */}
            {error && <Alert severity="error" sx={{ mt: 3 }}>{error}</Alert>}
        </Box>
    );
}
