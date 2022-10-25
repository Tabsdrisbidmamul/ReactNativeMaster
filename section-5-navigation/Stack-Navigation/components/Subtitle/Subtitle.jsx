import { StyleSheet, Text, View } from 'react-native';
import { colours } from '../../constants/colours';

export default function Subtitle({ children, style }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, style]}>{children}</Text>
      <View style={styles.highlight}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'relative',
    width: 300,
  },
  title: {
    fontFamily: 'roboto-light',
    fontSize: 32,
    marginBottom: 24,
    zIndex: 2,
    minWidth: '30%',
  },
  highlight: {
    position: 'absolute',
    top: 20,
    left: 0,
    backgroundColor: colours.yellow,
    height: 20,
    alignSelf: 'flex-start',
    minWidth: '30%',
    zIndex: 1,
  },
});
