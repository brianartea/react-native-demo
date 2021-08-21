import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default function ButtonsScreen() {
  return (
    <View style={styles.container}>
      <Button
        title="Simple Button"
        onPress={() => alert("This is a text button!")}
      />

      <View style={{ height: 20 }} />

      <Button
        color="red"
        title="Colored Button"
        onPress={() => alert("This is a colored text button!")}
      />

      <View style={{ height: 20 }} />

      <Pressable
        style={styles.customButton}
        onPress={() => alert("This is a custom button!")}
      >
        <Text style={styles.buttonText}>Custom Button</Text>
      </Pressable>

      <View style={{ height: 20 }} />

      <TouchableOpacity
        style={[styles.customButton, { backgroundColor: "#F6D527" }]}
        onPress={() => alert("This is a button with effect!")}
      >
        <Text style={[styles.buttonText, { color: "red" }]}>
          Button With Effect
        </Text>
      </TouchableOpacity>
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
  customButton: {
    backgroundColor: "#DB7093",
    width: "auto",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    padding: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
