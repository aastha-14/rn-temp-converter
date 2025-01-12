import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./HomePage.styles";
import Input from "./Input/Input";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>4 °C</Text>
      <Input defaultValue={0} />
      <Button title="Convert" color="#000" />
    </View>
  );
};

export default HomePage;
