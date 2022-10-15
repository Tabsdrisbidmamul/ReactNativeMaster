import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function DismissKeyboardViewHOC(Component) {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Component {...props}>{children}</Component>
    </TouchableWithoutFeedback>
  );
}
