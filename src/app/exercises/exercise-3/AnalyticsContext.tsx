"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";

// 🎯 Tipos del contexto
interface AnalyticsState {
  hoverEvents: number;
  clicks: number;
}

type AnalyticsAction =
  | { type: "LOG_HOVER" }
  | { type: "LOG_CLICK" }
  | { type: "RESET_ANALYTICS" };

// 🎯 Estado inicial
const initialState: AnalyticsState = {
  hoverEvents: 0,
  clicks: 0,
};

// 🎯 Reducer para manejar las acciones
function analyticsReducer(state: AnalyticsState, action: AnalyticsAction): AnalyticsState {
  switch (action.type) {
    case "LOG_HOVER":
      return { ...state, hoverEvents: state.hoverEvents + 1 };
    case "LOG_CLICK":
      return { ...state, clicks: state.clicks + 1 };
    case "RESET_ANALYTICS":
      return initialState; // Reinicia a 0
    default:
      return state;
  }
}

// 🎯 Tipos para el contexto
interface AnalyticsContextType {
  state: AnalyticsState;
  logHover: () => void;
  logClick: () => void;
  resetAnalytics: () => void;
}

// 🎯 Crear el contexto
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

// 🎯 Proveedor del contexto
export const AnalyticsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(analyticsReducer, initialState);

  const logHover = () => dispatch({ type: "LOG_HOVER" });
  const logClick = () => dispatch({ type: "LOG_CLICK" });
  const resetAnalytics = () => dispatch({ type: "RESET_ANALYTICS" });

  const value: AnalyticsContextType = { state, logHover, logClick, resetAnalytics };

  return <AnalyticsContext.Provider value={value}>{children}</AnalyticsContext.Provider>;
};

// 🎯 Hook para acceder al contexto
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) throw new Error("useAnalytics debe usarse dentro de AnalyticsProvider");
  return context;
};
