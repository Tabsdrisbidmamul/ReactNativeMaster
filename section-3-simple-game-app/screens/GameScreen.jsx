import { useEffect, useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Alert } from 'react-native';
import NumberContainer from '../components/Game/NumberContainer/NumberContainer';
import PrimaryButton from '../components/UI/PrimaryButton/PrimaryButton';
import Title from '../components/UI/Title/Title';

function generateRandomNumber(min, max, exclude) {
  if (min == max) return max;

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }

  return randomNumber;
}

export default function GameScreen({ userNumber, setGameIsOver }) {
  let minBoundary = 1;
  let maxBoundary = 10;

  const initialGuess = generateRandomNumber(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      setGameIsOver(true);
    }
  }, [currentGuess, userNumber, setGameIsOver]);

  /**
   *
   * @param {'lower'|'higher'} direction
   */
  function nextGuessHandler(direction) {
    if ((direction == 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [{ text: 'cancel', style: 'cancel' }]);

      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);

    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={() => nextGuessHandler('lower')}
            style={{ flex: 1, marginRight: 8 }}
            buttonStyle="danger"
          >
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler('higher')} style={{ flex: 1 }} buttonStyle="primary">
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
    padding: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
