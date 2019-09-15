import React from 'react';
import Header from './Header';
import DataList from './DataList';
import Footer from './Footer';


class Page extends React.Component {
	render() {
    return (
      <div className="app">
				<Header />
				<DataList data = {this.props.data}/>
				<Footer />
      </div>
    );
  }
}

export default Page;