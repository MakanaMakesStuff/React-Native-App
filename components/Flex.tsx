import { StyleSheet, View, ViewProps } from "react-native";

export function VFlex({ ...props }: ViewProps) {
  const { style = {}, ...rest } = props;
  return <View {...rest} style={[styles.vflex, style]} />;
}

export function HFlex({ ...props }: ViewProps) {
  const { style = {}, ...rest } = props;

  return <View {...rest} style={[styles.hflex, style]} />;
}

const styles = StyleSheet.create({
  vflex: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  hflex: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
