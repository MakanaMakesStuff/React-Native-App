import { useEffect, useState } from "react";
import { StyleSheet, Text, ViewProps } from "react-native";
import { HFlex } from "./Flex";
import Button from "./Button";
import { formatSeconds } from "../utils/functions";

export interface TimerProps extends ViewProps {
  callback?: () => void;
}

export default function Timer({ ...props }: TimerProps) {
  const { callback, style, ...rest } = props;

  const [counter, setCounter] = useState(0);

  //   0 = inactive, 1 = active
  const [counterState, setCounterState] = useState(1);

  useEffect(() => {
    if (counterState == 0) {
      return () => clearInterval(timer);
    }

    const timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [counterState]);

  return (
    <HFlex {...rest} style={[style, styles.timer]}>
      <Text
        style={[
          styles.counter,
          {
            color:
              counterState == 0
                ? "lightgray"
                : (styles.counter as any)?.["color"],
          },
        ]}
      >
        {formatSeconds(counter)}
      </Text>

      <HFlex style={{ flex: 1, justifyContent: "flex-end", gap: 8 }}>
        <Button onPress={() => setCounterState(1)} disabled={counterState == 1}>
          Start
        </Button>

        <Button
          onPress={() => setCounterState(0)}
          style={{
            backgroundColor: "orange",
          }}
          textStyle={{
            color: "white",
          }}
          disabled={counterState == 0}
        >
          Stop
        </Button>

        <Button
          onPress={callback}
          style={{
            backgroundColor: "red",
          }}
          textStyle={{
            color: "white",
          }}
        >
          Trash
        </Button>
      </HFlex>
    </HFlex>
  );
}

const styles = StyleSheet.create({
  timer: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fafafaff",
    overflow: "hidden",
    elevation: 2,
  },
  counter: {
    fontSize: 21,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
