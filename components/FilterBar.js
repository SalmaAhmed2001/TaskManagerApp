import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../styles";

const filters = ["All", "Pending", "In Progress", "Done"];

export default function FilterBar({ filter, setFilter }) {
  return (
    <View style={styles.filterContainer}>
      {filters.map((f) => (
        <TouchableOpacity
          key={f}
          style={[
            styles.filterButton,
            filter === f && { backgroundColor: "#34495e" },
          ]}
          onPress={() => setFilter(f)}
        >
          <Text style={styles.filterText}>{f}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
