import React from 'react';
import './App.css';
import usersMock from './usersMock';

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			data: usersMock
		}
  }

  render() {
		console.log(this.state.data);
    return (
      <div className="app">
				<ul className="users__list">
					{this.state.data.map((user, index) => 
					 <li className="users" key={index}>User {index +1}
					 	<ul className="user__info">
							 <li className="user__name">{user.name}</li>
							 <li className="user__email">{user.email}</li>
							 <li className="user__pass">Passwords
								<ol className="pass__list">
									{user.passwords.map((pass, index) =>
									<li className="pass_item" key={index}>{user.passwords[index]}</li>)}
								</ol>
							 </li>
							 <li className="user_bank">Bank data
								<ul className="bank_data">
									<li className="bank__iban">iban: {user.bank.iban}</li>
									<li className="bank__pin">pin: {user.bank.pin}</li>	
								</ul>
							 </li>
						</ul>
					 </li>		
				)}
				</ul>
      </div>
    );
  }
}

export default App;
