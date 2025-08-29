// import AsyncStorage from "@react-native-async-storage/async-storage";

// const STORAGE_KEY = "TASKS";

// export async function saveTasks(tasks) {
//   try {
//     const jsonValue = JSON.stringify(tasks);
//     await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
//   } catch (e) {
//     console.error("Error saving tasks", e);
//   }
// }

// export async function loadTasks() {
//   try {
//     const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
//     return jsonValue != null ? JSON.parse(jsonValue) : [];
//   } catch (e) {
//     console.error("Error loading tasks", e);
//     return [];
//   }
// }

















import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveTasks = async (tasks) => {
  try {
    await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (error) {
    console.log("Error saving tasks", error);
  }
};

export const loadTasks = async () => {
  try {
    const saved = await AsyncStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.log("Error loading tasks", error);
    return [];
  }
};
