import { StyleSheet, View, Text } from 'react-native';
import { colours } from '../../../constants/colours';

export default function Guess({ guess, roundNumber }) {
  return (
    <View style={styles.guessContainer}>
      <Text style={styles.guess}>#{roundNumber}</Text>
      <Text style={styles.guess}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  guessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 12,
    backgroundColor: colours.tertiary,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colours.black,
  },
  guess: {
    textAlign: 'center',
    color: colours.white,
    fontSize: 18,
    fontFamily: 'open-sans',
  },
});
