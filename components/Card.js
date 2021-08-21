import * as React from 'react';
import { Pressable, Text, StyleSheet, Platform } from 'react-native';

export default function Card({ title, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text>➡</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Platform.OS === 'ios' ? '78%' : '78%',
    margin: 10,
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
  },
});
