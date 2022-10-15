import { View, Text, StyleSheet } from 'react-native';
import { colours } from '../../../constants/colours';

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: colours.tertiary,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: colours.tertiary,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
