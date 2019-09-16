import React from 'react';
import './App.css';
import Page from './components/Page';
import usersMock from './usersMock';

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			data: usersMock,
			email: ''
		}

	this.getInput = this.getInput.bind(this);	
  }

  getInput(event) {
		console.log('hola');
		const typedEmail = event.target.value;
		const matched = this.state.data.filter(email => email.includes(typedEmail));
		this.setState({email: typedEmail, matched: matched});
	}

  render() {
    return (
			<Page 
				data = {this.state.data}
				email = {this.state.email}
				getInput = {this.GetInput}
				matched = {this.state.matched}
			/>
    );
  }
}

export default App;
