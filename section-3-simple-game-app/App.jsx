import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient, Line } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { colours } from './constants/colours';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);

  function handleChosenNumber(chosenNumner) {
    setUserNumber(chosenNumner);
    setGameIsOver(false);
  }

  let screen = <StartGameScreen handleChosenNumber={handleChosenNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} setGameIsOver={setGameIsOver} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient colors={[colours.primary, colours.secondary]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#2c3e50',
  },
  backgroundImage: {
    opacity: 0.08,
  },
});
