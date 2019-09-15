import React from 'react';
import './App.css';
import Page from './components/Page';
import usersMock from './usersMock';

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			data: usersMock
		}
  }

  render() {
    return (
			<Page data = {this.state.data}/>
    );
  }
}

export default App;
