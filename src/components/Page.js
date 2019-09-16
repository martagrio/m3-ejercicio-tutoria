import React from 'react';
import Header from './Header';
import Filter from './Filter';
import DataList from './DataList';
import Footer from './Footer';


class Page extends React.Component {
	render() {
    return (
      <div className="app">
				<Header />
				<Filter getInput={this.props.getInput} email= {this.props.email}/>
				<DataList data = {this.props.data}/>
				<Footer />
      </div>
    );
  }
}

export default Page;