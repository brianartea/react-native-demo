import * as React from "react";
import { Image, View, StyleSheet, Text } from "react-native";

export default function ImagesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.caption}>Online Image:</Text>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
        }}
        style={{ height: 150, width: 150 }}
      />

      <View style={{ height: 30 }} />

      <Text style={styles.caption}>Local Image:</Text>
      <Image
        source={require("../assets/brian-400x400.jpg")}
        style={{ height: 150, width: 150, borderRadius: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 8,
    alignItems: "center",
    width: "100%",
  },
  caption: {
    fontSize: 24,
  },
});
