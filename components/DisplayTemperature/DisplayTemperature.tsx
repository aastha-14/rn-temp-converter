import React from "react";
import { Text, View } from "react-native";
import { styles } from "./DisplayTemperature.styles";
import { convertTemperature, getOppositeUnit } from "../../utils/temperature";

const DisplayTemperature = ({
  temperature,
  unit,
}: {
  temperature: number | null;
  unit: string;
}) => {
  if (!temperature) return null;

  const oppositeUnit = getOppositeUnit(unit);
  return (
    <View>
      <Text style={styles.temperature}>
        {convertTemperature(temperature, oppositeUnit)} °{oppositeUnit}
      </Text>
    </View>
  );
};

export default DisplayTemperature;
