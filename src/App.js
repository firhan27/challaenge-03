// import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Form from "./components/Form";
// import TodosList from "./components/TodosList";
import "./App.css";
import TabelList from "./pages/TabelList";
import AddList from "./pages/AddList";

const App = () => {
  // const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  // const [input, setInput] = useState("");
  // const [todos, setTodos] = useState(initialState);
  // const [editTodo, setEditTodo] = useState(null);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    // <div className="container">
    //   <div className="app-wrapper">
    //     <div>
    //       <Header />
    //     </div>
    //     <div>
    //       <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
    //     </div>
    //     <div>
    //       <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    //     </div>
    //   </div>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/addlist" element={<AddList />} />
        <Route path="/" element={<TabelList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
