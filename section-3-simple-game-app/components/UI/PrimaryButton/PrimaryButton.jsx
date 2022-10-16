import { LinearGradient } from 'expo-linear-gradient';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { colours } from '../../../constants/colours';

function getButtonStyles(buttonStyle) {
  let _buttonStyle = [];
  let rippleColour = '';

  switch (buttonStyle) {
    case 'primary': {
      _buttonStyle = 'primary';
      rippleColour = 'primary-ripple';
      break;
    }
    case 'danger': {
      _buttonStyle = 'danger';
      rippleColour = 'danger-ripple';
      break;
    }
    case 'tertiary': {
      _buttonStyle = 'tertiary';
      rippleColour = 'tertiary-ripple';
      break;
    }
    default: {
      _buttonStyle = 'default';
      rippleColour = 'default-ripple';
      break;
    }
  }

  return [_buttonStyle, rippleColour];
}

/**
 *
 * @param {{children: , onPress: (...args) => any, buttonStyle: 'primary'|'danger'|'tertiary'|'default', style: {}}}} param0
 * @returns JSX.Element
 */
export default function PrimaryButton({ children, onPress, buttonStyle, style }) {
  const [_buttonStyle, rippleColour] = getButtonStyles(buttonStyle);

  return (
    <View style={[styles.outerContainer, style]}>
      <Pressable
        android_ripple={styles[rippleColour]}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={onPress}
      >
        <View style={[styles.common, styles[_buttonStyle]]}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    overflow: 'hidden',
    // elevation: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 5 },
    // shadowRadius: 5,
    // shadowOpacity: 0.25,
    borderRadius: 4,
  },
  textContainer: {
    // elevation: 8,
  },
  common: {
    paddingVertical: 12,
    borderRadius: 4,
    // flexDirection: 'row',
  },
  primary: {
    backgroundColor: colours.button.primary,
  },
  danger: {
    backgroundColor: colours.button.danger,
  },
  tertiary: {
    backgroundColor: colours.tertiary,
  },
  default: {
    backgroundColor: colours.button.default,
  },
  'primary-ripple': {
    color: colours.button['primary-ripple'],
  },
  'danger-ripple': {
    color: colours.button['danger-ripple'],
  },
  'tertiary-ripple': {
    color: colours.button['tertiary-ripple'],
  },
  'default-ripple': {
    color: colours.button['default-ripple'],
  },
  pressed: {
    opacity: 0.85,
  },
  text: {
    color: colours.white,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'open-sans-bold',
    textTransform: 'uppercase',
  },
});
