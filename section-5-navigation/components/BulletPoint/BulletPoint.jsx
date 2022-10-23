import { StyleSheet, Text } from 'react-native';
import { colours } from '../../constants/colours';

export default function BulletPoint({ style }) {
  return <Text style={[styles.point, style]}>{'\u2022'}</Text>;
}

const styles = StyleSheet.create({
  point: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    transform: [{ scale: 2.5 }],
    color: colours.white,
  },
});
