import Cardlist from "/src/Cardlist.jsx";
import { robots } from "/src/robots.js";
import SearchBox from "/src/SearchBox.jsx";

const App = () => {
	return (
		<div>
			<h1>RoboFriends</h1>
			<SearchBox />
			<Cardlist robots={robots} />
		</div>
	);
};
export default App;
