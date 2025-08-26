import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
