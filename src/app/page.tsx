"use client";
import { useState, ChangeEvent } from "react";

export default function Home() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>

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

        {/* Display todos */}
        {todos.length > 0 && (
          <ul className="w-full">
            {todos.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-3 mb-2 rounded-lg shadow-sm"
              >
                <span className="text-lg">{item}</span>
                <button
                  onClick={() => handleDeleteTodo(index)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}

        {todos.length === 0 && (
          <p className="text-gray-500">No todos yet. Add some above!</p>
        )}
      </div>
    </main>
  );
}
