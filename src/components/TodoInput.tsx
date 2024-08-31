"use client";
import { useState, ChangeEvent } from "react";

interface TodoInputProps {
  addTodo: (todo: string) => void;
}

export default function TodoInput({ addTodo }: TodoInputProps) {
  const [todo, setTodo] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (todo.trim()) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <div className="flex flex-row items-center gap-4 w-full">
      <input
        type="text"
        placeholder="Enter Todo"
        value={todo}
        className="flex-grow border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={handleInputChange}
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add
      </button>
    </div>
  );
}
