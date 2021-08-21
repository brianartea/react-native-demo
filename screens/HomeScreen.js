import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Card from "../components/Card";

export default function HomeScreen({ navigation }) {
  const topics = [
    { title: "🔤 Types of text", routeName: "Text" },
    { title: "🖼️ Types of images", routeName: "Images" },
    { title: "🔘 Types of buttons", routeName: "Buttons" },
    { title: "🔣 Types of inputs", routeName: "Inputs" },
    { title: "🔄 Types of switches", routeName: "Switches" },
    { title: "📃 Types of modals", routeName: "Modals" },
  ];

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22, textAlign: "center", fontWeight: "bold" }}>
        THE BASICS OF REACT⚛ NATIVE
      </Text>
      {/* <View style={{ height: 10 }} /> */}
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/e4/ad/b9/e4adb9dead114c659c05980d2b2314e3.gif",
        }}
        style={{ height: 307, width: 307 }}
        resizeMode="contain"
      />

      {/* <View style={{}} /> */}

      {topics.map(({ title, routeName }) => (
        <Card title={title} onPress={() => navigation.navigate(routeName)} />
      ))}
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
