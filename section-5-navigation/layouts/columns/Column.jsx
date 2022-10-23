import { StyleSheet, View } from 'react-native';

export default function Column({ children, numRows, style }) {
  return <View style={[styles[`${numRows}col`], style]}>{children}</View>;
}

const styles = StyleSheet.create({
  '1col': {
    flex: 1,
  },
  '2col': {
    flex: 2,
  },
  '3col': {
    flex: 3,
  },
  '4col': {
    flex: 4,
  },
});
