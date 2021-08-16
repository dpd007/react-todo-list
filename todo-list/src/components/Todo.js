import "./Todo.css";
import Card from "./UIElements/Card";
import { useState } from "react";
const Todo = ({ lists, addToList }) => {
  const [inputText, setInputText] = useState("");
  const inputHandler = (event) => {
    setInputText({ value: event.target.value });
  };
  const btnHandler = (event) => {
    event.preventDefault();
    addToList(inputText.value);
    setInputText("");
  };

  return (
    <div className="to__do">
      <h3>Enter your todos here:</h3>
      <form onSubmit={btnHandler}>
        <input
          type="text"
          id="userInput"
          value={inputText.value || ""}
          onChange={inputHandler}
        />
        <button type="submit" id="save__btn">
          save
        </button>
      </form>
      <Card list={lists} />
    </div>
  );
};

export default Todo;
