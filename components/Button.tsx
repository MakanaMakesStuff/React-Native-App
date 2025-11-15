import { ReactNode, useState } from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

export default function Button({
  children,
  textStyle,
  ...props
}: { children: ReactNode; textStyle?: any } & PressableProps) {
  const { style, disabled = false, ...rest } = props;

  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      {...rest}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        styles.buttonBase,
        style as any,
        disabled
          ? styles.buttonDisabled
          : pressed
          ? styles.buttonActive
          : styles.buttonInactive,
      ]}
    >
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: "#f7f7f7ff",
    elevation: 2,
  },
  buttonDisabled: {
    opacity: 0.25,
  },
  buttonInactive: {},
  buttonActive: {
    backgroundColor: "#b4b4b4ff",
  },
});
