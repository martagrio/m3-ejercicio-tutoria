import React from 'react';
import DataCard from './DataCard';
import PropTypes from 'prop-types';

class DataList extends React.Component {
	render() {
		return (
			<ul className="users__list">
				{this.props.data.map((user, index) => 
				<li className="users" key={index}>User {index +1}			
					<DataCard user = {user} />
				</li>		
			)}
			</ul>
		)
	}		
}

DataList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DataList;