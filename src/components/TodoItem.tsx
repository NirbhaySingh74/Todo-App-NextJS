"use client";

interface TodoItemProps {
  todo: string;
  index: number;
  deleteTodo: (index: number) => void;
}

export default function TodoItem({ todo, index, deleteTodo }: TodoItemProps) {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-3 mb-2 rounded-lg shadow-sm">
      <span className="text-lg">{todo}</span>
      <button
        onClick={() => deleteTodo(index)}
        className="text-red-500 hover:text-red-700 transition"
      >
        Delete
      </button>
    </li>
  );
}
