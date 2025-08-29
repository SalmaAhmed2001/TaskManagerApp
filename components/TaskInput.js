// import React, { useState } from "react";
// import { View, TextInput, Button, StyleSheet } from "react-native";
// import PropTypes from "prop-types";

// export default function TaskInput({ onAddTask }) {
//   const [text, setText] = useState("");

//   const handleAdd = () => {
//     if (text.trim()) {
//       onAddTask(text);
//       setText(""); // clear input after adding
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter a new task..."
//         value={text}
//         onChangeText={setText}
//       />
//       <Button title="Add" onPress={handleAdd} />
//     </View>
//   );
// }

// TaskInput.propTypes = {
//   onAddTask: PropTypes.func.isRequired,
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     marginBottom: 12,
//   },
//   input: {
//     flex: 1,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     padding: 10,
//     marginRight: 8,
//     borderRadius: 5,
//     backgroundColor: "#fff",
//   },
// });










import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "../styles";

export default function TaskInput({ task, setTask, addTask }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter task..."
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
