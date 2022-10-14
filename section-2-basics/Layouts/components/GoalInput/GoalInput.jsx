import { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Pressable, Modal, Image } from 'react-native';

export default function GoalInput({ modalIsVisibile, setModalIsVisible, addGoalHandler }) {
  const [enteredGoalText, setEnteredGoalText] = useState(null);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoal = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText(null);
    setModalIsVisible(false);
  };

  return (
    <Modal transparent={true} visible={modalIsVisibile} animationType="slide">
      <Pressable onPress={() => setModalIsVisible(false)} style={styles.backdrop}>
        <Image style={styles.image} source={require('./../../assets/images/goal.png')} />
      </Pressable>
      <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={goalInputHandler}
            style={styles.textInput}
            placeholder="Your course goal!"
            placeholderTextColor="#2c3e50"
            value={enteredGoalText}
          />
          <Pressable onPress={addGoal} style={styles.button}>
            <Text style={{ color: '#fff' }}>Add Goal</Text>
          </Pressable>
        </View>

        <View style={styles.closeButtonContainer}>
          <Pressable style={styles.closeButton} onPress={() => setModalIsVisible(false)}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Go back</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    // height: '30%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: '#ccc',
    marginBottom: 20,
  },
  backdrop: {
    flex: 4,
    backgroundColor: 'rgba(0,0,0,0.32)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 24,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    // borderRadius: 8,
  },
  closeButtonContainer: {
    // flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    borderRadius: 2,
    backgroundColor: '#ecf0f1',
  },
  button: {
    padding: 12,
    backgroundColor: '#27ae60',
    borderRadius: 2,
  },
  closeButton: {
    padding: 12,
    backgroundColor: '#e74c3c',
    borderRadius: 2,
    width: '100%',
  },
});
