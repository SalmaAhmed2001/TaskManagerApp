# 📋 Task Manager App

A simple **Task Manager App** built with **React Native**.  
This app allows you to **add, filter, update, and delete tasks** with persistent storage.  
It is structured in a **modular way** with separate components, hooks, and utility files for better readability and maintainability.

---

## 🚀 Features
- ➕ Add tasks with a title.
- 🔄 Change task status by tapping (`Pending → In Progress → Done → Pending`).
- 🔍 Filter tasks by status (`All`, `Pending`, `In Progress`, `Done`).
- 🗑️ Delete tasks individually.
- 💾 Persistent storage using `AsyncStorage` (tasks are saved even after the app restarts).
- 🎨 Clean and modular UI with reusable components.

---

Third-Party Libraries

React Native → Core framework for building cross-platform mobile apps.

@react-native-async-storage/async-storage → Persistent storage for saving tasks locally on the device.

🛠️ Usage

Type a task in the input field and press Add.

Tap a task to cycle its status:

🟠 Pending

🔵 In Progress

✅ Done

Use the filter bar to view tasks by status.

Tap ❌ to delete a task.

📦 Libraries & Installation

1-Expo CLI – to run and build the project

npm install -g expo-cli


2-Start the project for web

npx expo start --web


3-AsyncStorage – for saving tasks persistently (local storage)

npx expo install @react-native-async-storage/async-storage


4-React DOM, React Native Web, Expo Metro Runtime – to make React Native components run in the browser

npx expo install react-dom react-native-web @expo/metro-runtime
