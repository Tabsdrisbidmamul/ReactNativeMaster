import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { TextInput, Alert, View, StyleSheet, Platform, StatusBar } from 'react-native';
import Card from '../components/UI/Card/Card';
import PrimaryButton from '../components/UI/PrimaryButton/PrimaryButton';
import Title from '../components/UI/Title/Title';
import { colours } from '../constants/colours';

export default function StartGameScreen({ handleChosenNumber }) {
  const [numberEntered, setNumberEntered] = useState('');

  function resetInputHandler() {
    setNumberEntered('');
  }

  function handleOnConfirm() {
    const chosenNumner = parseInt(numberEntered);

    if (isNaN(chosenNumner) || chosenNumner <= 0 || chosenNumner > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);

      return;
    }
    handleChosenNumber(chosenNumner);
  }

  function handleOnCancel() {
    resetInputHandler();
  }

  function handleOnNumberInput(enteredNumber) {
    setNumberEntered(enteredNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title style={{ marginHorizontal: 24 }}>Guess my number</Title>
      <Card>
        <TextInput
          value={numberEntered}
          onChangeText={handleOnNumberInput}
          style={
            numberEntered === '' ? [styles.numberInput, { fontStyle: 'italic', fontSize: 24 }] : styles.numberInput
          }
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          placeholder="Enter a number"
          placeholderTextColor={colours.tertiary}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton style={{ marginRight: 8, flex: 1 }} onPress={handleOnCancel} buttonStyle="danger">
            Reset
          </PrimaryButton>
          <PrimaryButton style={{ flex: 1 }} onPress={handleOnConfirm} buttonStyle="primary">
            Confirm
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
    marginVertical: 24,
    marginTop: 100,
    // alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 16,
    marginTop: 32,
  },
  numberInput: {
    height: 50,
    width: '100%',
    marginHorizontal: 24,
    fontSize: 32,
    borderBottomColor: colours.tertiary,
    borderBottomWidth: 2,
    color: colours.tertiary,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'open-sans',
  },
});
