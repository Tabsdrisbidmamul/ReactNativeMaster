import { useNavigation } from '@react-navigation/core';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { colours } from '../constants/colours';

export default function CategoryGridTile({ title, color, handlePress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={handlePress}
        android_ripple={{ color: colours.androidWhiteRipple }}
        style={({ pressed }) =>
          !pressed
            ? [styles.pressableContainer, { backgroundColor: color }]
            : [
                styles.pressableContainer,
                {
                  ...Platform.select({
                    ios: styles.buttonPressed,
                  }),
                },
                { backgroundColor: color },
              ]
        }
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: colours.white,
    shadowColor: colours.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    ...Platform.select({
      android: {
        overflow: 'hidden',
      },
    }),
  },
  pressableContainer: {
    flex: 1,
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.25,
    // backgroundColor: colours.androidWhiteRipple,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 18,
    color: colours.black,
    letterSpacing: 0.5,
  },
});
