import React from 'react';
import Header from './Header';
import DataList from './DataList';
import Footer from './Footer';
import PropTypes from 'prop-types';


class Page extends React.Component {
	render() {
    return (
      <div className="app">
				<Header />
				<main className="app__main">	
					<DataList data = {this.props.data}/>
				</main>
				<Footer />
      </div>
    );
  }
}

Page.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Page;