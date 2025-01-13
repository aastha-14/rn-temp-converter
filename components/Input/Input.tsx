import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "./Input.styles";
import { getOppositeUnit } from "../../utils/temperature";

const Input = ({
  temperature,
  unit,
  setUnit,
  handleChangeText,
}: {
  temperature: number | null;
  unit: string;
  setUnit: (value: string) => void;
  handleChangeText: (value: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={4}
        placeholder="Temperature.."
        keyboardType="numeric"
        value={temperature?.toString()}
        onChangeText={handleChangeText}
      />
      <View style={styles.unit}>
        <Button
          title={`°${unit}`}
          color="#000"
          onPress={() => setUnit(getOppositeUnit(unit))}
        />
      </View>
    </View>
  );
};

export default Input;
