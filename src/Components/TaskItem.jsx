import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useState } from "react";

export default function TaskItem({ task, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const [error, setError] = useState("");

  const handleUpdate = () => {
    const trimmed = text.trim();
    if (!trimmed) {
      setError("Task cannot be empty.");
      return;
    }
    if (trimmed.length > 100) {
      setError("Task is too long (max 100 characters).");
      return;
    }
    setError("");
    onUpdate(task.id, { ...task, text: trimmed });
    setIsEditing(false);
  };

  return (
    <div className="bg-purple-500 text-white rounded-lg px-4 py-2 flex justify-between items-center">
      {isEditing ? (
        <div className="flex flex-col flex-1">
          <input
            className="flex-1 mr-2 px-2 py-1 rounded bg-purple-700 text-white outline-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={handleUpdate}
            onKeyDown={(e) => e.key === "Enter" && handleUpdate()}
            autoFocus
          />
          {error && <span className="text-red-400 text-xs mt-1">{error}</span>}
        </div>
      ) : (
        <span
          className={task.completed ? "line-through opacity-60 cursor-pointer" : "cursor-pointer"}
          title={task.completed ? "Click to mark as incomplete" : "Click to complete"}
          onClick={() => onUpdate(task.id, { ...task, completed: !task.completed })}
        >
          {task.text}
        </span>
      )}

      <div className="flex gap-3">
        <button onClick={() => setIsEditing(true)}>
          <FiEdit2 className="hover:text-gray-200" />
        </button>
        <button onClick={() => onDelete(task.id)}>
          <FiTrash2 className="hover:text-gray-200" />
        </button>
      </div>
    </div>
  );
}
