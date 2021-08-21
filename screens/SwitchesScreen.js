import React, { useState } from "react";
import { Text, View, StyleSheet, Switch } from "react-native";

export default function SwitchesScreen() {
  const [simpleIsEnabled, setSimpleIsEnabled] = useState(false);
  const [customizedIsEnabled, setCustomizedIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 5 }}>Simple switch:</Text>
      <Switch
        onValueChange={() => setSimpleIsEnabled(!simpleIsEnabled)}
        value={simpleIsEnabled}
      />

      <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 5 }}>
        Customized switch:
      </Text>
      <Switch
        onValueChange={() => setCustomizedIsEnabled(!customizedIsEnabled)}
        value={customizedIsEnabled}
        trackColor={{ true: "#4A934A", false: "#B00020" }}
        ios_backgroundColor="#B00020"
        thumbColor={customizedIsEnabled ? "#5CB85C" : "#EE4238"}
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
});
