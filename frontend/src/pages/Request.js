import React, { Component } from 'react';


export class Request extends Component {
	constructor(props){
		super(props);
		this.state= {value: '',request:''};


		this.handleChange = this.handleChange.bind(this);
		this.handleRequest = this.handleRequest.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({value:event.target.value});
	}
	handleRequest(event){
		this.setState({request:event.target.value})
	}
	handleSubmit(event){
		alert('name   '+ this.state.value + 'Request :' +this.state.request)
		event.preventDefault();
	}
	render() {
		return (
			<div>
			<form onSubmit={this.handleSubmit}>
			<label>
			Name:
			<input type="text" value={this.state.value} onChange={this.handleChange} />
			<br/>Request:
			<input type="text" value={this.state.request} onChange={this.handleRequest} />
			</label><br/>
			<input type="submit" value="Submit" />
			</form>
			</div>
			);
	}
}

