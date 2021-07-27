import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    toDoList: [],
  };
  handleSubmit = (event) => {
    const tascDesc = event.target.elements.toDoTask.value;
    if (tascDesc.length > 0) {
      this.setState({
        toDoList: [...this.state.toDoList, tascDesc],
      });
      event.target.reset();
    }
    event.preventDefault();
  };

  deleteToDoTask = (event, index) => {
    const taskArray = [...this.state.toDoList];
    taskArray.splice(index, 1);
    this.setState({ toDoList: taskArray });
  };
  render() {
    return (
      <>
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1>To-Do-List</h1>
          </div>
        </div>
        <form className="mb-3" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="toDoTask"
              className="form-control"
              placeholder="Enter Your Task"
              autoComplete="off"
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-outline-success">
                Add
              </button>
            </div>
          </div>
        </form>
        <ul className="list-group">
          {this.state.toDoList.map((item, index) => {
            return (
              <li className="list-group-item" key={index}>
                {item}
                <button
                  className="btn btn-sm btn-outline-danger float-right"
                  onClick={(event) => {
                    this.deleteToDoTask(event, index);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
