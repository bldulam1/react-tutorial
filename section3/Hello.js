class Hello extends React.Component {
	render() {
		const {from, to} = this.props;
		return (
			<h1>Hi {to}! From {from}</h1>
		);
	}
}
