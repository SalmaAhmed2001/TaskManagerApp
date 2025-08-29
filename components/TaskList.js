// import React from "react";
// import { View } from "react-native";
// import TaskItem from "./TaskItem";

// export default function TaskList({ tasks, onUpdate, onDelete }) {
//   return (
//     <View>
//       {tasks.map((task) => (
//         <TaskItem
//           key={task.id}
//           task={task}
//           onUpdate={onUpdate}
//           onDelete={onDelete}
//         />
//       ))}
//     </View>
//   );
// }







import React from "react";
import { FlatList } from "react-native";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, changeStatus, deleteTask }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem
          item={item}
          changeStatus={changeStatus}
          deleteTask={deleteTask}
        />
      )}
    />
  );
}
