import { useState } from "react";
import { Form, AddButton } from "./TodoForm.styled";
import { CgAdd } from "react-icons/cg";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slice";
import { selectTodos } from "../../redux/selectors";
import { useSelector } from "react-redux";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);

  const handleAddTodo = () => {
    const existingTask = todos.find(
      (todo) => todo.text.toLowerCase() === value.toLowerCase()
    );
    if (existingTask) {
      toast.error(`You already have a ${existingTask.text} task!`);
      setValue("");
    } else if (value === "") {
      return toast.error("Please write your task", { duration: 1000 });
    } else {
      dispatch(addTodo(value));
      setValue("");
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      handleAddTodo();
    }
  };
  return (
    <Form>
      <input
        type="text"
        placeholder="add todo..."
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <AddButton aria-label="add" type="button" onClick={handleAddTodo}>
        <CgAdd size={20} style={{ color: "green" }} />
      </AddButton>
    </Form>
  );
};

export default TodoForm;
