import { Item, DeleteButton } from "./TodoItem.styled";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "../../redux/slice";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

interface TodoProps {
  todo: Todo;
  completed: boolean;
}

const TodoItem = ({ todo, completed }: TodoProps) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTodo(todo.id));

  const handleToggle = () => dispatch(toggleCompleted(todo.id));
  return (
    <Item>
      <input type="checkbox" onChange={handleToggle} checked={completed} />
      <p>{todo.text}</p>
      <DeleteButton aria-label="delete" type="button" onClick={handleDelete}>
        <BsFillTrash3Fill size={20} style={{ fill: "red" }} />
      </DeleteButton>
    </Item>
  );
};

export default TodoItem;
