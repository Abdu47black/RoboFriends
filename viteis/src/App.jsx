import Cardlist from "/src/Cardlist.jsx";
import { robots } from "/src/robots.js";
import SearchBox from "/src/SearchBox.jsx";
import { Component } from "react";
import "/src/App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			SearchField: "",
		};
	}
	onSearchChange = (event) => {
		this.setState({ SearchField: event.target.value });
	};

	render() {
		const FilterdRobots = this.state.robots.filter((robots) => {
			return robots.name
				.toLowerCase()
				.includes(this.state.SearchField.toLowerCase());
		});
		return (
			<div className="Title">
				<h1 id="one">RoboFriends</h1>
				<SearchBox SearchChange={this.onSearchChange} />
				<Cardlist robots={FilterdRobots} />
			</div>
		);
	}
}
export default App;
