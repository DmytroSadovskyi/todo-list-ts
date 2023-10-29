// import { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { Todo } from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Toaster } from "react-hot-toast";

// const getInitialTodos = () => {
//   const savedTodos = localStorage.getItem("todos");
//   if (savedTodos !== null) {
//     const parsedTodos = JSON.parse(savedTodos);
//     return parsedTodos;
//   }
//   return [];
// };

const App = () => {
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  // const addTodo = (text: string) => {
  //   const newTodo = { id: uuidv4(), text, completed: false };
  //   if (
  //     todos.find(
  //       (todo) => todo.text.toLowerCase() === newTodo.text.toLowerCase()
  //     )
  //   ) {
  //     return toast.error(`You already have a ${newTodo.text} task`);
  //   }
  //   setTodos([...todos, newTodo]);
  // };
  // const deleteTodo = (todoId: string) => {
  //   const newTodos = todos.filter((todo) => todo.id !== todoId);
  //   setTodos(newTodos);
  // };

  // const toggleCompleted = (id: string) => {
  //   const newTodo = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, completed: !todo.completed };
  //     } else {
  //       return todo;
  //     }
  //   });
  //   setTodos(newTodo);
  // };
  return (
    <div>
      <Toaster />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
