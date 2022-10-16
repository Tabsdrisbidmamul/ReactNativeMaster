import { useEffect, useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Alert, Text, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import uuid from 'react-native-uuid';

import NumberContainer from '../components/Game/NumberContainer/NumberContainer';
import Card from '../components/UI/Card/Card';
import PrimaryButton from '../components/UI/PrimaryButton/PrimaryButton';
import Title from '../components/UI/Title/Title';
import { colours } from '../constants/colours';
import Guess from '../components/UI/Guess/Guess';

function generateRandomNumber(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }

  return randomNumber;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, setGameIsOver, setGuessRounds }) {
  const initialGuess = generateRandomNumber(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, _setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      setGameIsOver(true);
    }
  }, [currentGuess, userNumber, setGameIsOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  /**
   *
   * @param {'lower'|'higher'} direction
   */
  function nextGuessHandler(direction) {
    if (maxBoundary === minBoundary) return;

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
    setGuessRounds((currentValue) => currentValue + 1);
    _setGuessRounds((currentValue) => [newRandomNumber, ...currentValue]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title style={{ marginTop: 20 }}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <Title style={{ marginBottom: 30, width: '100%' }}>Higher or lower?</Title>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={() => nextGuessHandler('lower')}
            style={{ flex: 1, marginRight: 8 }}
            buttonStyle="danger"
          >
            <Ionicons name="remove-circle-outline" size={32} color={colours.white} />
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler('higher')} style={{ flex: 1 }} buttonStyle="primary">
            <Ionicons name="add-circle-outline" size={32} color={colours.white} />
          </PrimaryButton>
        </View>
      </Card>

      <View style={styles.guessesContainer}>
        {/* {guessRounds.map((_guessRound) => (
          <Text key={_guessRound}>{_guessRound}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => <Guess guess={item} roundNumber={guessRoundsListLength - index} />}
          keyExtractor={() => uuid.v4()}
        />
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
  guessesContainer: {
    marginVertical: 20,
    marginHorizontal: 16,
    flex: 1,
  },
});
