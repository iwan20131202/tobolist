import { Component } from "react";
import { Form, Input, Button } from "./TodoEditor.styled.js";

class ToDoEditor extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onAdd(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          value={this.state.text}
          placeholder="Додати нове завдання"
          onChange={this.handleChange}
        />
        <Button>Add</Button>
      </Form>
    );
  }
}

export default ToDoEditor;
