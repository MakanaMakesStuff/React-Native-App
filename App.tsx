import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export interface ProductI {
  key: string;
  label: string;
}

const DATA = Array.from({ length: 30 }).map(
  (_, i) => ({ key: `${i}`, label: `Product ${i + 1}` } as ProductI)
);

function Product({ item }: { item: ProductI }) {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <Pressable
      onPressIn={() => setSelected(true)}
      onPressOut={() => setSelected(false)}
    >
      <Text style={selected ? styles.productSelected : styles.product}>
        {item.label}
      </Text>
    </Pressable>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={(item) => <Product item={item.item} />}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  product: {
    backgroundColor: "#f3f3f3ff",
    color: "#000",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#dfdfdfff",
  },
  productSelected: {
    backgroundColor: "#c2c2c2ff",
    color: "#ffffffff",
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#dfdfdfff",
  },
});
