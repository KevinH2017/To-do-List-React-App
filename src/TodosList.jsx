import List from "@mui/material/List";
import { useState } from "react";
import TodoItem from "./TodoItem";

// Example tasks
const initialTodos = [
  { id: 1, text: "walk the dog", completed: false },
  { id: 2, text: "walk the cat", completed: false },
  { id: 3, text: "walk the fish", completed: true },
  { id: 4, text: "walk the chicken", completed: false },
];

export default function TodosList() {
  // State of example tasks
  const [todos, setTodos] = useState(initialTodos);

  // Deletes task with the specified id
  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  // Toggles a task with the specified id to return opposite completed state
  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            remove={() => removeTodo(todo.id)}
            toggle={() => toggleTodo(todo.id)}
          />
        ))}
      </List>
    </>
  );
}
