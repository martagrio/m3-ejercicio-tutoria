import React from 'react';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: ''
		}
	}

	componentDidMount() {
		setInterval(()=>{this.getTime();}, 1000);
	}

	getTime() {
		const hours = new Date().getHours();
		const minutes = new Date().getMinutes();
		const seconds = new Date().getSeconds();
		this.setState({time: `${hours}:${minutes}:${seconds}`}); 
	}

	render() {
			return (
				<footer className="app__footer">
					<h4 className="footer__title">loh()</h4>
					<p className="footer__clock">Local time: {this.state.time}</p>
				</footer>
			)
	}		
}

export default Footer;