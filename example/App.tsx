import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import { BlurView, BlurViewGroup } from "react-native-qmblurview";

// TODO: test case repeatatly show & hide BlurViewGroup will truncate text
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

      <View
        style={{
          position: "absolute",
          rowGap: 20,
          alignItems: "center",
        }}
      >
        <BlurView
          style={{
            width: 100,
            height: 100,
          }}
          // cornerRadius={65}
          blurRadius={65}
          blurRounds={1}

          // Light blur - best performance
          // blurRadius={15}
          // blurRounds={2}

          // Strong blur - balanced (recommended)
          // blurRadius={25}
          // blurRounds={3}
        >
        </BlurView>

        {/* TODO: this is crashing right now */}
        {/* <BlurViewGroup
          cornerRadius={65}
          style={{
            width: 200,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            BlurViewGroup
          </Text>
        </BlurViewGroup>
      </View> */}
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
