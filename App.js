// // App.js
// import React, { useState } from "react";
// import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
// import TaskInput from "./components/TaskInput";
// import TaskList from "./components/TaskList";
// import SearchBar from "./components/SearchBar";
// import useTasks from "./hooks/useTasks";

// export default function App() {
//   const { tasks, addTask, toggleTask, deleteTask, updateProgress } = useTasks();
//   const [searchQuery, setSearchQuery] = useState("");

//   // Filter tasks by search query
//   const filteredTasks = tasks.filter((task) =>
//     task.text.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       <TaskInput onAddTask={addTask} />
//       <ScrollView>
//         <TaskList
//           tasks={filteredTasks}
//           onToggle={toggleTask}
//           onDelete={deleteTask}
//           onProgress={updateProgress}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f9f9f9",
//   },
// });



// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function App() {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState("");
//   const [filter, setFilter] = useState("All");

//   // Load tasks from storage
//   useEffect(() => {
//     loadTasks();
//   }, []);

//   // Save tasks whenever they change
//   useEffect(() => {
//     saveTasks();
//   }, [tasks]);

//   const loadTasks = async () => {
//     try {
//       const stored = await AsyncStorage.getItem("tasks");
//       if (stored) setTasks(JSON.parse(stored));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const saveTasks = async () => {
//     try {
//       await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const addTask = () => {
//     if (task.trim() === "") return;
//     setTasks([
//       ...tasks,
//       { id: Date.now().toString(), text: task, status: "Pending" },
//     ]);
//     setTask("");
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((t) => t.id !== id));
//   };

//   const changeStatus = (id) => {
//     setTasks(
//       tasks.map((t) =>
//         t.id === id
//           ? {
//               ...t,
//               status:
//                 t.status === "Pending"
//                   ? "In Progress"
//                   : t.status === "In Progress"
//                   ? "Done"
//                   : "Pending",
//             }
//           : t
//       )
//     );
//   };

//   const filteredTasks =
//     filter === "All" ? tasks : tasks.filter((t) => t.status === filter);

//   const getStatusColor = (status) => {
//     if (status === "Pending") return "#f39c12"; // orange
//     if (status === "In Progress") return "#3498db"; // blue
//     if (status === "Done") return "#2ecc71"; // green
//     return "#7f8c8d"; // grey
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>📋 Task Manager</Text>

//       {/* Input Field */}
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Enter task..."
//           value={task}
//           onChangeText={setTask}
//           style={styles.input}
//         />
//         <TouchableOpacity onPress={addTask} style={styles.addBtn}>
//           <Text style={styles.btnText}>Add</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Filter Buttons */}
//       <View style={styles.filterContainer}>
//         {["All", "Pending", "In Progress", "Done"].map((f) => (
//           <TouchableOpacity
//             key={f}
//             onPress={() => setFilter(f)}
//             style={[
//               styles.filterBtn,
//               filter === f && { backgroundColor: "#34495e" },
//             ]}
//           >
//             <Text style={styles.filterText}>{f}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Task List */}
//       <FlatList
//         data={filteredTasks}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View
//             style={[styles.task, { borderLeftColor: getStatusColor(item.status) }]}
//           >
//             <TouchableOpacity onPress={() => changeStatus(item.id)}>
//               <Text style={{ fontSize: 16, color: getStatusColor(item.status) }}>
//                 {item.text} ({item.status})
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => deleteTask(item.id)}>
//               <Text style={styles.deleteText}>❌</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: "#ecf0f1" },
//   title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
//   inputContainer: { flexDirection: "row", marginBottom: 15 },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 10,
//     backgroundColor: "#fff",
//   },
//   addBtn: {
//     marginLeft: 10,
//     backgroundColor: "#2ecc71",
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     justifyContent: "center",
//   },
//   btnText: { color: "#fff", fontWeight: "bold" },
//   filterContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 15,
//   },
//   filterBtn: {
//     padding: 8,
//     backgroundColor: "#95a5a6",
//     borderRadius: 6,
//   },
//   filterText: { color: "#fff", fontWeight: "bold" },
//   task: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 12,
//     marginBottom: 8,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     borderLeftWidth: 6,
//   },
//   deleteText: { color: "red", fontWeight: "bold", fontSize: 18 },
// });






// import React, { useState, useEffect } from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function App() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState("All");

//   // Load tasks from storage
//   useEffect(() => {
//     loadTasks();
//   }, []);

//   // Save tasks when updated
//   useEffect(() => {
//     saveTasks(tasks);
//   }, [tasks]);

//   const saveTasks = async (tasks) => {
//     try {
//       await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
//     } catch (error) {
//       console.log("Error saving tasks", error);
//     }
//   };

//   const loadTasks = async () => {
//     try {
//       const savedTasks = await AsyncStorage.getItem("tasks");
//       if (savedTasks) {
//         setTasks(JSON.parse(savedTasks));
//       }
//     } catch (error) {
//       console.log("Error loading tasks", error);
//     }
//   };

//   const addTask = () => {
//     if (task.trim() === "") return;
//     const newTask = {
//       id: Date.now().toString(),
//       text: task,
//       status: "Pending", // default status
//     };
//     setTasks([...tasks, newTask]);
//     setTask("");
//   };

//   const changeStatus = (id) => {
//     setTasks(
//       tasks.map((t) => {
//         if (t.id === id) {
//           let newStatus =
//             t.status === "Pending"
//               ? "In Progress"
//               : t.status === "In Progress"
//               ? "Done"
//               : "Pending";
//           return { ...t, status: newStatus };
//         }
//         return t;
//       })
//     );
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((t) => t.id !== id));
//   };

//   const getFilteredTasks = () => {
//     if (filter === "All") return tasks;
//     return tasks.filter((t) => t.status === filter);
//   };

//   const getStatusColor = (status) => {
//     if (status === "Pending") return "#f39c12"; // orange
//     if (status === "In Progress") return "#3498db"; // blue
//     if (status === "Done") return "#2ecc71"; // green
//     return "#bdc3c7"; // gray default
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Task Manager App</Text>

//       {/* Input */}
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Enter task..."
//           value={task}
//           onChangeText={setTask}
//           style={styles.input}
//         />
//         <TouchableOpacity style={styles.addButton} onPress={addTask}>
//           <Text style={styles.addText}>Add</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Filters */}
//       <View style={styles.filterContainer}>
//         {["All", "Pending", "In Progress", "Done"].map((f) => (
//           <TouchableOpacity
//             key={f}
//             style={[
//               styles.filterButton,
//               filter === f && { backgroundColor: "#34495e" },
//             ]}
//             onPress={() => setFilter(f)}
//           >
//             <Text style={styles.filterText}>{f}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Task List */}
//       <FlatList
//         data={getFilteredTasks()}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View
//             style={[
//               styles.taskItem,
//               { borderLeftColor: getStatusColor(item.status) },
//             ]}
//           >
//             <TouchableOpacity
//               style={styles.taskContent}
//               onPress={() => changeStatus(item.id)}
//             >
//               <Text style={styles.taskText}>{item.text}</Text>
//               <Text style={{ color: getStatusColor(item.status) }}>
//                 {item.status}
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => deleteTask(item.id)}>
//               <Text style={styles.deleteText}>❌</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#ecf0f1", padding: 20 },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//     color: "#2c3e50",
//   },
//   inputContainer: { flexDirection: "row", marginBottom: 15 },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 10,
//     backgroundColor: "#fff",
//   },
//   addButton: {
//     marginLeft: 10,
//     backgroundColor: "#27ae60",
//     borderRadius: 8,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   addText: { color: "#fff", fontWeight: "bold" },
//   filterContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 15,
//   },
//   filterButton: {
//     backgroundColor: "#7f8c8d",
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//   },
//   filterText: { color: "#fff" },
//   taskItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 8,
//     marginBottom: 10,
//     borderLeftWidth: 6,
//   },
//   taskContent: { flex: 1 },
//   taskText: { fontSize: 16, fontWeight: "500", color: "#2c3e50" },
//   deleteText: { fontSize: 18, marginLeft: 10 },
// });





import React from "react";
import { SafeAreaView, Text } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import useTasks from "./hooks/useTasks";
import styles from "./styles";

export default function App() {
  const {
    task, setTask, tasks, filter,
    setFilter, addTask, deleteTask, changeStatus, getFilteredTasks
  } = useTasks();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Task Manager App</Text>
      <TaskInput task={task} setTask={setTask} addTask={addTask} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={getFilteredTasks()}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
      />
    </SafeAreaView>
  );
}
