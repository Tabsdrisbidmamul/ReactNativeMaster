import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function GoalItem({ item, removeGoalHandler }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#16a085' }}
        onPress={() => removeGoalHandler(item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

const baseStyles = StyleSheet.create({
  goalBasetext: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    marginBottom: 6,
    borderRadius: 2,
  },
});

const styles = StyleSheet.create({
  goalItem: {
    ...baseStyles.goalBasetext,
    backgroundColor: '#1abc9c',
  },
  goalText: {
    color: '#fff',
    padding: 12,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
