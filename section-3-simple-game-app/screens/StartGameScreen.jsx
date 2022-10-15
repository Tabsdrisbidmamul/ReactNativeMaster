import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { TextInput, Alert, View, StyleSheet, Platform, StatusBar } from 'react-native';
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
    // <LinearGradient style={styles.container} ccolors={['#232526', '#414345']}>

    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <View style={styles.container}>
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
      </View>
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
  },
  container: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    // backgroundColor: '#b92b27',
    // borderRadius: 4,
    // elevation: 5,
    // shadowColor: colours.black,
    // shadowOffset: { width: 0, height: 5 },
    // shadowRadius: 5,
    // shadowOpacity: 0.25,
    alignItems: 'center',
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
  },
});
