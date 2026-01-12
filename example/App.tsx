import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { BlurView } from "react-native-qmblurview";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={{
          flex: 1,
        }}
        resizeMode="contain"
        source={require("./assets/image.jpg")}
      />

      <BlurView
        style={{
          width: 100,
          height: 100,
          position: "absolute",
        }}
        cornerRadius={65}

        blurRadius={65}
        blurRounds={1}

        // Light blur - best performance
        // blurRadius={15}
        // blurRounds={2}

        // Strong blur - balanced (recommended)
        // blurRadius={25}
        // blurRounds={3}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
