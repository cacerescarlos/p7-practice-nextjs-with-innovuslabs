"use client";
import { Geolocation } from "@capacitor/geolocation";

// Obtener la ubicación actual
export const getCurrentLocation = async () => {
  try {
    const position = await Geolocation.getCurrentPosition();
    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
  } catch (error) {
    console.error("Error al obtener la ubicación:", error);
    throw new Error("No se pudo obtener la ubicación. Verifique permisos.");
  }
};
