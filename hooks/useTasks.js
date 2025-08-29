// import { useState, useEffect } from "react";
// import { loadTasks, saveTasks } from "../utils/storage";

// export default function useTasks() {
//   const [tasks, setTasks] = useState([]);

//   // Load tasks when app starts
//   useEffect(() => {
//     const fetchTasks = async () => {
//       const storedTasks = await loadTasks();
//       if (storedTasks) setTasks(storedTasks);
//     };
//     fetchTasks();
//   }, []);

//   // Save whenever tasks change
//   useEffect(() => {
//     saveTasks(tasks);
//   }, [tasks]);

//   const addTask = (text) => {
//     setTasks((prev) => [
//       ...prev,
//       { id: Date.now(), text, completed: false, progress: 0 },
//     ]);
//   };

//   const toggleTask = (id) => {
//     setTasks((prev) =>
//       prev.map((t) =>
//         t.id === id ? { ...t, completed: !t.completed } : t
//       )
//     );
//   };

//   const updateProgress = (id, delta) => {
//     setTasks((prev) =>
//       prev.map((t) =>
//         t.id === id
//           ? { ...t, progress: Math.min(100, Math.max(0, t.progress + delta)) }
//           : t
//       )
//     );
//   };

//   const deleteTask = (id) => {
//     setTasks((prev) => prev.filter((t) => t.id !== id));
//   };

//   return { tasks, addTask, toggleTask, deleteTask, updateProgress };
// }










import { useState, useEffect } from "react";
import { saveTasks, loadTasks } from "../utils/storage";

export default function useTasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    (async () => {
      const saved = await loadTasks();
      if (saved) setTasks(saved);
    })();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;
    const newTask = {
      id: Date.now().toString(),
      text: task,
      status: "Pending",
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const changeStatus = (id) => {
    setTasks(tasks.map((t) =>
      t.id === id
        ? {
            ...t,
            status:
              t.status === "Pending"
                ? "In Progress"
                : t.status === "In Progress"
                ? "Done"
                : "Pending",
          }
        : t
    ));
  };

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const getFilteredTasks = () =>
    filter === "All" ? tasks : tasks.filter((t) => t.status === filter);

  return {
    task, setTask, tasks, filter, setFilter,
    addTask, deleteTask, changeStatus, getFilteredTasks
  };
}
