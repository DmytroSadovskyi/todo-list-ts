import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="container">
      <Toaster />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
