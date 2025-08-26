import { useState } from "react";
import { FiPlus } from "react-icons/fi";


export default function TaskInput({ onAdd }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    const trimmed = input.trim();
    if (!trimmed) {
      setError("Task cannot be empty.");
      return;
    }
    if (trimmed.length > 100) {
      setError("Task is too long (max 100 characters).");
      return;
    }
    setError("");
    onAdd(trimmed);
    setInput("");
  };

  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What is the task today?"
          className="flex-1 p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none"
        />
        <button
          onClick={handleAdd}
          className="flex items-center gap-1 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          <FiPlus /> Add Task
        </button>
      </div>
      {error && <span className="text-red-400 text-sm">{error}</span>}
    </div>
  );
}
