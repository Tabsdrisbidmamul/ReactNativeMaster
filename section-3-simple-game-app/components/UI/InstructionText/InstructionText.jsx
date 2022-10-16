import { StyleSheet, Text } from 'react-native';
import { colours } from '../../../constants/colours';

export default function InstructionText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: colours.white,
    marginBottom: 10,
  },
});
