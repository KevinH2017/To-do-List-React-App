import List from "@mui/material/List";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

//  Gets todos from local storage in the browser
const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  // If there is no data in local storage,
  // return empty list, else return parsed local storage
  if (!data) return [];
  return data;
};

export default function TodosList() {
  // State of tasks
  const [todos, setTodos] = useState(getInitialData);

  // Creates local storage to hold todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Deletes task with the specified id
  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  // Toggles task with the specified id true-to-false / false-to-true
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

  // Adds a new task
  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { text: text, id: crypto.randomUUID(), completed: false },
      ];
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
        <TodoForm addTodo={addTodo} />
      </List>
    </>
  );
}
