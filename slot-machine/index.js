class App extends React.Component {
	render() {
		return (
			<div>
        <h1>Slot Machine</h1>
        <Machine values={[Math.random(), Math.random(), Math.random()]}/>
				<Machine values={[Math.random(), Math.random(), Math.random()]}/>
				<Machine values={[Math.random(), Math.random(), Math.random()]}/>
				<Machine values={[Math.random(), Math.random(), Math.random()]}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
