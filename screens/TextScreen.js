import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function TextScreen() {
  return (
    <View style={styles.container}>
      <Text>Default Text</Text>

      <Text style={{ fontSize: 50, marginTop: 20 }}>Large Text 50px</Text>

      <Text style={{ fontSize: 30, color: "blue", marginTop: 20 }}>
        Colored Text 30px
      </Text>

      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
        Bold Text 20px
      </Text>

      <Text
        style={{ fontSize: 20, textDecorationLine: "underline", marginTop: 20 }}
      >
        Underlined Text 20px
      </Text>
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
});
