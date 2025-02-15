"use client";
import React, { useState } from "react";
import { getCurrentLocation } from "./capacitorService";
import { Box, Typography, Button, Paper, CircularProgress, Alert } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// 🎯 Icono personalizado para el pin
const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
});

interface Location {
    latitude: number;
    longitude: number;
}

export default function Exercise2Page() {
    const [location, setLocation] = useState<Location | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // 🎯 Obtener ubicación actual
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
        <Box sx={{ maxWidth: 600, margin: "2rem auto", textAlign: "center" }}>
            <Typography variant="h4" color="primary" gutterBottom>
                🌐 Geolocalización - Capacitor
            </Typography>

            {/* Botón para obtener ubicación */}
            <Button
                variant="contained"
                color="success"
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

                    {/* Mapa con la ubicación */}
                    {/* <Box sx={{ height: "300px", width: "100%", mt: 2, minHeight: "300px" }}>
                        <MapContainer
                            center={[location.latitude, location.longitude]}
                            zoom={15}
                            style={{ height: "100%", width: "100%" }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; OpenStreetMap contributors"
                            />
                            <Marker position={[location.latitude, location.longitude]} icon={customIcon}>
                                <Popup>Ubicación actual</Popup>
                            </Marker>
                        </MapContainer>
                    </Box> */}

                </Paper>
            )}

            {/* Mostrar error si ocurre */}
            {error && <Alert severity="error" sx={{ mt: 3 }}>{error}</Alert>}
        </Box>
    );
}
