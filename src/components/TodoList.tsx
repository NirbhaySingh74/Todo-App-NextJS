"use client";

import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: string[];
  deleteTodo: (index: number) => void;
  updateTodo: (index: number) => void;
}

export default function TodoList({
  todos,
  deleteTodo,
  updateTodo,
}: TodoListProps) {
  return (
    <ul className="w-full">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}
