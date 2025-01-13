import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./HomePage.styles";
import Input from "./Input/Input";
import DisplayTemperature from "./DisplayTemperature/DisplayTemperature";
import { useTemperature } from "../context/TemperatureContext";

const HomePage = () => {
  const { temperature, setTemperature, unit, setUnit } = useTemperature();
  const handleChangeText = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    setTemperature(numericValue ? parseInt(numericValue, 10) : 0);
  };

  return (
    <View style={styles.container}>
      <DisplayTemperature temperature={temperature} unit={unit} />
      <Input
        unit={unit}
        temperature={temperature}
        setUnit={setUnit}
        handleChangeText={handleChangeText}
      />
    </View>
  );
};

export default HomePage;
