import {Component} from 'react';

// import './employee-add-form.css';
import './employees-add-form.scss';
class EmployeesAddForm extends Component {

		state = {
			name: '',
			salary: ''
		}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.name.length < 3 || isNaN(this.state.salary)) return;
		this.props.onAdd(this.state.name, this.state.salary);
		this.setState({
			name: '',
			salary: '',
		})
	}

	static onLog = () => {
		console.log("hey");
	}

	static logged = 'on';

	render() {
		const {name, salary} = this.state;

		return (
			<div className="app-add-form">
				<h3>Add new employee</h3>
				<form className="add-form d-flex"
				onSubmit={this.onSubmit}>
					<input type="text" 
						className="form-control new-post-label"
						placeholder="Name"
						name='name'
						value={name}
						onChange={this.onValueChange}/>
					<input type="nubmer" 
						className="form-control new-post-label"
						placeholder="Salary"
						name='salary'
						value={salary}
						onChange={this.onValueChange}/>
	
					<button type="submit"
							className="btn btn-outline-light">Add</button>
				</form>
			</div>
		);
	}
}


export default EmployeesAddForm;