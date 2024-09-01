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
    <li className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-white">
      <span className="text-lg sm:text-base md:text-lg font-semibold mb-2 sm:mb-0">
        {todo}
      </span>
      <div className="flex space-x-3 sm:space-x-3 md:space-x-4 sm:flex-row flex-col space-y-2 sm:space-y-0">
        <button
          className="text-white hover:text-blue-200 transition-transform transform hover:scale-110"
          onClick={() => updateTodo(index)}
        >
          <MdEdit size={20} />
        </button>
        <button
          onClick={() => deleteTodo(index)}
          className="text-white hover:text-red-300 transition-transform transform hover:scale-110"
        >
          <MdDelete size={20} />
        </button>
      </div>
    </li>
  );
}
