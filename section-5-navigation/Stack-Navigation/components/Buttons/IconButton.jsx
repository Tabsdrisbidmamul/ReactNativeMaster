import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colours } from '../../constants/colours';

export default function IconButton({ icon, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Ionicons name={icon} size={24} color={colours.purple} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
