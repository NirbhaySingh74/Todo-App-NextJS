"use client";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

interface TodoItemProps {
  todo: string;
  index: number;
  deleteTodo: (index: number) => void;
  updateTodo: (index: number) => void;
}

export default function TodoItem({
  todo,
  index,
  deleteTodo,
  updateTodo,
}: TodoItemProps) {
  return (
    <li className="relative bg-gray-100 p-4 mb-4 rounded-lg shadow-sm flex flex-col">
      <div className="absolute right-2 top-2 flex space-x-2">
        <button
          className="text-blue-500 hover:text-blue-700 transition"
          onClick={() => updateTodo(index)}
        >
          <MdEdit size={20} />
        </button>
        <button
          onClick={() => deleteTodo(index)}
          className="text-red-500 hover:text-red-700 transition"
        >
          <MdDelete size={20} />
        </button>
      </div>
      <span className="text-lg mt-6">{todo}</span>
    </li>
  );
}
