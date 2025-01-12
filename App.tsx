import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomePage from "./components/HomePage";
import { styles } from "./App.styles";
import { ImageBackground } from "react-native";
import hot from "./assets/hot.png";

export default function App() {
  return (
    <>
      <ImageBackground style={styles.backgroundImage} source={hot}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.root}>
            <HomePage />
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
}
