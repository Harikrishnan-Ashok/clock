import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tile from "./components/Tile";
import ClockFace from "./components/ClockFace";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Tile back="pink" text="hello">
        <ClockFace></ClockFace>
      </Tile>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
