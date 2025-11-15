import { ScrollView, StyleSheet, Text } from "react-native";
import Timer from "./components/Timer";
import { useState } from "react";
import { HFlex, VFlex } from "./components/Flex";
import Button from "./components/Button";

export default function App() {
  const [timers, setTimers] = useState([{ id: 1 }]);

  const addTimer = () => {
    setTimers((prev) => [
      ...prev,
      { id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
    ]);
  };

  const removeTimer = (id: number) => {
    setTimers((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <VFlex style={style.container}>
      <Text style={style.title}>My Timers</Text>

      <ScrollView style={{ width: "100%" }} contentContainerStyle={{ gap: 10 }}>
        {timers?.length > 0 ? (
          timers.map((t) => (
            <Timer callback={() => removeTimer(t.id)} key={t.id} />
          ))
        ) : (
          <Text
            style={{
              flex: 1,
              width: "100%",
              textAlign: "center",
              padding: 20,
            }}
          >
            No timers created
          </Text>
        )}
      </ScrollView>

      <HFlex
        style={{
          width: "100%",
        }}
      >
        <Button
          onPress={() => addTimer()}
          style={{
            backgroundColor: "crimson",
          }}
          textStyle={{
            color: "white",
          }}
        >
          Add Timer +
        </Button>
      </HFlex>
    </VFlex>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    gap: 10,
  },
});
