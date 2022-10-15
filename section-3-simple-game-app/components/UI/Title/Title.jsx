import { StyleSheet, Text } from 'react-native';
import { colours } from '../../../constants/colours';

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colours.white,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: colours.white,
    padding: 12,
  },
});
