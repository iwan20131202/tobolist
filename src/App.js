import "./App.css";

import { Component } from "react";
import data from "./data/todo-data.json";
import ToDoList from "./components/TodoList.js";
import ToDoEditor from "./components/TodoEditor.js";
import Info from "./components/TodoInfo.js";
import Filter from "./components/FilterTodo.js";

import { MdAddTask } from "react-icons/md";

import { Container, Title } from "./App.styled.js";

class App extends Component {
  state = {
    todos: data,
    filter: "",
  };

  addTodo = (text) => {
    const trimmedText = text.trim();

    if (!trimmedText) return;

    const todo = {
      id: Date.now().toString(),
      text: trimmedText,
      completed: false,
    };

    this.setState((prevTodos) => ({
      todos: [todo, ...prevTodos.todos],
    }));
  };

  deleteTodo = (id) => {
    this.setState((prevTodos) => ({
      todos: prevTodos.todos.filter((item) => item.id !== id),
    }));
  };

  toggleCompleted = (id) => {
    this.setState((prevTodos) => ({
      todos: prevTodos.todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    }));

    // alert("Стан змінено!");
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  changeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { todos, filter } = this.state;
    const completedCount = todos.filter((item) => item.completed).length;

    return (
      <Container>
        <Title>
          ToDo List
          <MdAddTask />
        </Title>

        <Info total={todos.length} completed={completedCount} />
        <ToDoEditor onAdd={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <ToDoList
          todos={this.getFilteredTodos()}
          onDelete={this.deleteTodo}
          onToggle={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;
