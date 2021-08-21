import React, { useState } from "react";
import { Text, View, StyleSheet, Modal, Button, Image } from "react-native";

export default function ModalsScreen() {
  const [simpleModalVisible, setSimpleModalVisible] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={simpleModalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setSimpleModalVisible(!simpleModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modal}>
            <Text>This is a simple modal.</Text>
            <View style={{ height: 10 }} />
            <Button
              title="Close Modal"
              color="red"
              onPress={() => setSimpleModalVisible(false)}
            />
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={imageModalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setImageModalVisible(!imageModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modal}>
            <Text>This is a modal with image.</Text>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
              }}
              style={{ height: 150, width: 150 }}
            />
            <Button
              title="Close Modal"
              color="red"
              onPress={() => setImageModalVisible(false)}
            />
          </View>
        </View>
      </Modal>

      <Button
        title="Show Simple Modal"
        onPress={() => setSimpleModalVisible(true)}
      />

      <View style={{ height: 20 }} />

      <Button
        title="Show Modal With Image"
        onPress={() => setImageModalVisible(true)}
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
  modal: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    width: "70%",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "column", // React Native's Default FlexDirection is column
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -60,
  },
});
