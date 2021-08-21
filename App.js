import * as React from "react";
import { Text, TextInput, View } from "react-native";
//import Card from "./components/Card";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import TextScreen from "./screens/TextScreen";
import ImagesScreen from "./screens/ImagesScreen";
import ButtonsScreen from "./screens/ButtonsScreen";
import InputsScreen from "./screens/InputsScreen";
import ModalsScreen from "./screens/ModalsScreen";
import SwitchesScreen from "./screens/SwitchesScreen";

const Stack = createNativeStackNavigator();

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "🏠 Home" }}
        />
        <Stack.Screen
          name="Text"
          component={TextScreen}
          options={{ title: "🔤 Types of text" }}
        />
        <Stack.Screen
          name="Images"
          component={ImagesScreen}
          options={{ title: "🖼️ Types of images" }}
        />
        <Stack.Screen
          name="Buttons"
          component={ButtonsScreen}
          options={{ title: "🔘 Types of buttons" }}
        />
        <Stack.Screen
          name="Inputs"
          component={InputsScreen}
          options={{ title: "🔣 Types of inputs" }}
        />
        <Stack.Screen
          name="Modals"
          component={ModalsScreen}
          options={{ title: "📃 Types of modals" }}
        />
        <Stack.Screen
          name="Switches"
          component={SwitchesScreen}
          options={{ title: "🔄 Types of switches" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
