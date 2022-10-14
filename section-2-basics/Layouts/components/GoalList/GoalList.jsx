import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GoalItem from '../GoalItem/GoalItem';

export default function GoalList({ goals, removeGoalHandler }) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        alwaysBounceVertical={false}
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GoalItem item={item} removeGoalHandler={removeGoalHandler} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,

    paddingHorizontal: 8,
    width: '100%',
  },
});
