import { StyleSheet, Text } from 'react-native';
import { colours } from '../../../constants/colours';

export default function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
    color: colours.white,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: colours.white,
    padding: 12,
  },
});
