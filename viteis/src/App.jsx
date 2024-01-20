import Cardlist from "/src/Cardlist.jsx";
import { robots } from "/src/robots.js";
import SearchBox from "/src/SearchBox.jsx";
import "/src/App.css";
const App = () => {
	return (
		<div className="Title">
			<h1 id="one">RoboFriends</h1>
			<SearchBox />
			<Cardlist robots={robots} />
		</div>
	);
};
export default App;
