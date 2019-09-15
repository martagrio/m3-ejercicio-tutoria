import React from 'react';

class DataCard extends React.Component {
	render() {
		return (
			<div className="user__info">
				<h2 className="user__name">{this.props.user.name}</h2>
				<h3 className="user__email">{this.props.user.email}</h3>
				<h3 className="user__pass">Passwords
				<ol className="pass__list">
					{this.props.user.passwords.map((pass, index) =>
					<li className="pass_item" key={index}>{this.props.user.passwords[index]}</li>)}
				</ol>
				</h3>
				<h3 className="user_bank">Bank data
				<ul className="bank_data">
					<li className="bank__iban">iban: {this.props.user.bank.iban}</li>
					<li className="bank__pin">pin: {this.props.user.bank.pin}</li>	
				</ul>
				</h3>
			</div>
		)
	}		
}

export default DataCard;