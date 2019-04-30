class Hello extends React.Component {

	render() {
		const {from, to, bangs, img_src} = this.props;
		return (
			<div>
				<p>Hi {to}{'!'.repeat(bangs)} from {from}</p>
				<img src={img_src} alt=""/>

			</div>
		);
	}
}
