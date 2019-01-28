import React from "react";
import axios from "axios";

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      allTodos: []
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
      this.setState({
        allTodos: res.data
      });
    });
  }

  render() {
    let { allTodos } = this.state;
    let allTodosMapped = allTodos.map(todo => {
      return (
        <div className="allTodosMappedDiv" key={todo.id}>
          <h1>
            {todo.title}
            <br />
            {"Completed: " + String(todo.completed)}
          </h1>
        </div>
      );
    });
    return (
      <div className="todosDiv">
        <h1>TODO</h1>
        {allTodosMapped}
      </div>
    );
  }
}

export default Todos;
