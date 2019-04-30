class Machine extends React.Component {
	render() {
		const {values} = this.props;
		const choices = ['x', 'y', 'z'];
		const vals = values.map(value => choices[Math.floor(3*value)]);
		const msg = (vals[0] === vals[1]) && (vals[0] === vals[2])
			? 'You win!'
			: 'You lose.';

		return (
			<div>
        <p>{vals[0]} {vals[1]} {vals[2]}</p>
				<p> {msg} </p>
			</div>
		);
	}
}