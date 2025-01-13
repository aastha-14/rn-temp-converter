import React, { createContext, useContext, useState, ReactNode } from "react";

type TemperatureContextType = {
  temperature: number | null;
  setTemperature: (value: number | null) => void;
  unit: string;
  setUnit: (value: string) => void;
};

const TemperatureContext = createContext<TemperatureContextType | undefined>(
  undefined
);

export const TemperatureProvider = ({ children }: { children: ReactNode }) => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [unit, setUnit] = useState<string>("C");

  return (
    <TemperatureContext.Provider
      value={{ temperature, setTemperature, unit, setUnit }}
    >
      {children}
    </TemperatureContext.Provider>
  );
};

export const useTemperature = () => {
  const context = useContext(TemperatureContext);
  if (!context) {
    throw new Error("useTemperature must be used within a TemperatureProvider");
  }
  return context;
};
