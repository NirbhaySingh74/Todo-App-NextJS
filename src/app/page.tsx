"use client";

import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>

        <TodoInput addTodo={addTodo} />

        {todos.length > 0 ? (
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        ) : (
          <p className="text-gray-500">No todos yet. Add some above!</p>
        )}
      </div>
    </main>
  );
}
