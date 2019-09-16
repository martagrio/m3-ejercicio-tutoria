import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
	render() {
		return (
			<div className="search__box">
				<label htmlFor="filter">Introduce el correo electrónico que desea buscar: </label>
				<input type="text" className="input__filter" id="filter" onChange={this.props.GetInput} value={this.props.email}/>
			</div>
		)
	}
}
Filter.propTypes = {
	GetInput: PropTypes.func,
	email: PropTypes.string
}

export default Filter;