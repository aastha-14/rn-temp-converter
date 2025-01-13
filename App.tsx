import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import HomePage from "./components/HomePage";
import { styles } from "./App.styles";
import hot from "./assets/hot.png";
import cold from "./assets/cold.png";

import {
  TemperatureProvider,
  useTemperature,
} from "./context/TemperatureContext";
import { isHot } from "./utils/temperature";

const AppContent = () => {
  const { temperature, unit } = useTemperature();

  // Determine the background image based on temperature
  const backgroundImage = isHot(temperature ?? 32, unit) ? hot : cold;

  return (
    <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
          <HomePage />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default function App() {
  return (
    <TemperatureProvider>
      <AppContent />
    </TemperatureProvider>
  );
}
