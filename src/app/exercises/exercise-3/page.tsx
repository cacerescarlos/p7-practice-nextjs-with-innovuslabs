import { AnalyticsProvider } from "./AnalyticsContext";
import EventList from "./components/EventList";
import EventButton from "./components/EventButton";
import AnalyticsPanel from "./components/AnalyticsPanel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Exercise3Page() {
  return (
    <AnalyticsProvider>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h3" color="primary" gutterBottom>
          📊 Dashboard de Análisis
        </Typography>
      </Box>

      {/* Diseño de dos columnas */}
      <Grid container spacing={4} sx={{ mt: 4, px: 4 }}>
        {/* Columna izquierda: Lista */}
        <Grid item xs={12} md={6}>
          <Box sx={{ borderRight: "2px solid #ccc", pr: 2 }}>
            <Typography variant="h5" color="secondary" gutterBottom>
              🖱️ Lista de Eventos
            </Typography>
            <EventList />
          </Box>
        </Grid>

        {/* Columna derecha: Botón + Panel */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            {/* Botón */}
            <EventButton />

            {/* Panel de Análisis */}
            <AnalyticsPanel />
          </Box>
        </Grid>
      </Grid>
    </AnalyticsProvider>
  );
}
