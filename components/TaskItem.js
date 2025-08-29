// // components/TaskItem.js
// import React from "react";
// import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

// const TaskItem = ({ task, onToggle, onDelete }) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={onToggle} style={styles.checkbox}>
//         <Text style={styles.checkmark}>{task.completed ? "✅" : "⭕"}</Text>
//       </TouchableOpacity>
//       <Text style={[styles.text, task.completed && styles.completed]}>
//         {task.text}
//       </Text>
//       <TouchableOpacity onPress={onDelete}>
//         <Text style={styles.delete}>❌</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 6,
//     backgroundColor: "#f5f5f5",
//     padding: 10,
//     borderRadius: 8,
//   },
//   checkbox: {
//     marginRight: 10,
//   },
//   checkmark: {
//     fontSize: 20,
//   },
//   text: {
//     flex: 1,
//     fontSize: 16,
//   },
//   completed: {
//     color: "gray",
//     textDecorationLine: "line-through",
//   },
//   delete: {
//     marginLeft: 10,
//     fontSize: 18,
//     color: "red",
//   },
// });

// export default TaskItem;










import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";

const getStatusColor = (status) => {
  if (status === "Pending") return "#f39c12";
  if (status === "In Progress") return "#3498db";
  if (status === "Done") return "#2ecc71";
  return "#bdc3c7";
};

export default function TaskItem({ item, changeStatus, deleteTask }) {
  return (
    <View
      style={[styles.taskItem, { borderLeftColor: getStatusColor(item.status) }]}
    >
      <TouchableOpacity
        style={styles.taskContent}
        onPress={() => changeStatus(item.id)}
      >
        <Text style={styles.taskText}>{item.text}</Text>
        <Text style={{ color: getStatusColor(item.status) }}>
          {item.status}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={styles.deleteText}>❌</Text>
      </TouchableOpacity>
    </View>
  );
}
