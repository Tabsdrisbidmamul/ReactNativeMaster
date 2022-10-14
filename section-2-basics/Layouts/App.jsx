import { useState } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import uuid from 'react-native-uuid';
import GoalInput from './components/GoalInput/GoalInput';
import GoalList from './components/GoalList/GoalList';

export default function App() {
  const [goals, setGoal] = useState([]);
  const [modalIsVisibile, setModalIsVisible] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    setGoal((currentGoals) => [...currentGoals, { text: enteredGoalText, id: uuid.v4() }]);
  };

  const removeGoalHandler = (id) => {
    setGoal((currentGoals) => currentGoals.filter((el) => el.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Pressable style={styles.button} onPress={() => setModalIsVisible(true)}>
          <Text style={{ color: '#fff' }}>Add New Goal</Text>
        </Pressable>

        {modalIsVisibile ? (
          <GoalInput
            modalIsVisibile={modalIsVisibile}
            setModalIsVisible={setModalIsVisible}
            addGoalHandler={addGoalHandler}
          />
        ) : null}

        <GoalList goals={goals} removeGoalHandler={removeGoalHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  button: {
    padding: 12,
    width: '100%',
    backgroundColor: '#3498db',
    marginBottom: 8,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
