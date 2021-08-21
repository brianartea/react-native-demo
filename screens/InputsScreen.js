import * as React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function InputsScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <TextInput placeholder="Simple Input" />

      <TextInput placeholder="Styled Input" style={styles.styledInput} />

      <View style={styles.inputContainer}>
        <MaterialIcons name="format-color-text" color="black" size={24} />
        <TextInput style={styles.input} placeholder="Input With Icon" />
      </View>
    </KeyboardAvoidingView>
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
  styledInput: {
    marginTop: 20,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    height: 60,
    width: "60%",
    fontSize: 20,
  },
  inputContainer: {
    marginTop: 20,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    height: 60,
    width: "60%",
    fontSize: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    paddingLeft: 5,
    width: "100%",
    fontSize: 20,
  },
});
