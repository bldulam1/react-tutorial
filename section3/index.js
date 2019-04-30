class App extends React.Component {
	render() {
		return (
			<div>
        <Hello
          to="Ringo"
          from="Paul"
          bangs={2}
          img_src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
