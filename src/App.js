import React, { useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Todo from "./components/Todo";
function App() {
  const [todos, setToDos] = useState([
    "This is first",
    "This is obvio second",
    "I hope this works",
  ]);
  const [input, setInput] = useState("");

  // const inputHandler = (e) => {
  //   e.target.value;
  // }

  const addTodo = (e) => {
    e.preventDefault();
    
    setToDos([...todos, input]);
    //Spread the array and add whats in input
    setInput("");
    //This is to set the search bar to blank again

  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <form>
       
        <FormControl>
          <InputLabel>
            Write a ToDo
          </InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)}/>
        </FormControl>

        <Button disbaled={!input}
          variant="contained"
          type="submit"
          onClick={addTodo}
          color="primary"
        >
          + ADD
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text= {todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
