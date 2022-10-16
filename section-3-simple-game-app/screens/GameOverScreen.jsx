import { Image, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import Title from '../components/UI/Title/Title';
import { colours } from '../constants/colours';
import PrimaryButton from '../components/UI/PrimaryButton/PrimaryButton';

export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.screen}>
      <Title style={{ marginHorizontal: 24, marginTop: 32, alignSelf: 'stretch' }}>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>

      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>

        <PrimaryButton onPress={onStartNewGame} buttonStyle="tertiary" style={{ marginTop: 36 }}>
          Start a new Game
        </PrimaryButton>
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
    paddingTop: 24,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  imageContainer: {
    marginVertical: 36,
    borderRadius: 200,
    overflow: 'hidden',
    width: 400,
    height: 400,
    borderWidth: 5,
    borderColor: colours.tertiary,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: colours.tertiary,
  },
});
