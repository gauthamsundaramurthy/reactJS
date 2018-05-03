import React from "react";
import Footer from "./footer";
import AddTodo from "../containers/addToDo";
import VisibleTodoList from "../containers/visibleToDoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
