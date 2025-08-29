import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ecf0f1", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#2c3e50",
  },
  inputContainer: { flexDirection: "row", marginBottom: 15 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#27ae60",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addText: { color: "#fff", fontWeight: "bold" },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  filterButton: {
    backgroundColor: "#7f8c8d",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  filterText: { color: "#fff" },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 6,
  },
  taskContent: { flex: 1 },
  taskText: { fontSize: 16, fontWeight: "500", color: "#2c3e50" },
  deleteText: { fontSize: 18, marginLeft: 10 },
});
