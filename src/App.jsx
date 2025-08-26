import { useEffect, useState } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import { getTasks, addTask, updateTask, deleteTask } from "./API/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load tasks from API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const handleAdd = async (text) => {
    try {
      const newTask = await addTask({ text, completed: false });
      setTasks([...tasks, newTask]);
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  const handleUpdate = async (id, updatedTask) => {
    try {
      const newTask = await updateTask(id, updatedTask);
      setTasks(tasks.map((task) => (task.id === id ? newTask : task)));
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 px-2 sm:px-0">
      <div className="bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
          Get Things Done!
        </h1>

        <TaskInput onAdd={handleAdd} />

        {loading ? (
          <p className="text-gray-400 text-center">Loading tasks...</p>
        ) : (
          <TaskList tasks={tasks} onDelete={handleDelete} onUpdate={handleUpdate} />
        )}
      </div>
    </div>
  );
}
