import TodoItem from "../TodoItem";
import { List } from "./TodoList.styled";
import { useSelector } from "react-redux";
import { selectTodos } from "../../redux/selectors";

const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} completed={todo.completed} />
      ))}
    </List>
  );
};

export default TodoList;
