import "./App.css";
import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const addListHandler = (text) => {
    // console.log(text);
    let newList = [...toDoList];
    newList = [ ...newList, {text, id: toDoList.length + 1 }];
    // console.log(newList);
    setToDoList(newList);
  };

  return (
    <div className="App">
      <h3>To Do App</h3>
      <Todo lists={toDoList} addToList={addListHandler} />
    </div>
  );
}

export default App;
