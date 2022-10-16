import { StyleSheet, View } from 'react-native';

export default function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    marginHorizontal: 24,
    // padding: 16,
    alignItems: 'center',
  },
});
