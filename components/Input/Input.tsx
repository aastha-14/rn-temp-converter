import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./Input.styles";

const Input = ({ defaultValue }: { defaultValue: number }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={3}
        placeholder="Temperature.."
        defaultValue={defaultValue.toString()}
      />
      <Text style={styles.unit}>°C</Text>
    </View>
  );
};

export default Input;
