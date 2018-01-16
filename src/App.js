import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';
import './App.css';

class App extends Component {
	state = {
		tasks: [
			{taskText: 'Buy milk', id: 't1'},
			{taskText: 'Walk with dog', id: 't2'},
			{taskText: 'Do sumethink', id: 't3'}
		],
		currentTask: ''
	};

	changeCurrentTask = (event) => {
		const currentTask = event.target.value;
		this.setState({currentTask});

	};

	addNewTask = () => {
		const tasks = [...this.state.tasks];
		let newTaskObj = {
			taskText: this.state.currentTask,
			id: `t${new Date().getTime()}`
		};
		tasks.push(newTaskObj);
		this.setState({tasks});
	};

	removeTask = (id) => {
        const index = this.state.tasks.findIndex(item => item.id === id);
        console.log(id);
        const tasks = [...this.state.tasks];
        tasks.splice(index, 1);
        this.setState({tasks});
    };

	render() {

		let tasks = (
			<div>
				{
					this.state.tasks.map((item) => {
						return <Task
							key={item.id}
							task={item.taskText}
	                        remove={() => this.removeTask(item.id)}>
						</Task>
					})
				}
			</div>
		);

		return (
			<div className="App">
				<div className="container">
					<AddTaskForm
						value = {this.state.currentTask}
						change={this.changeCurrentTask}
						click = {this.addNewTask}>
					</AddTaskForm>
					{tasks}
				</div>
			</div>
		);
  }
}

export default App;
