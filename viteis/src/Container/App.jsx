import Cardlist from "/src/Components/Cardlist.jsx";
import SearchBox from "/src/Components/SearchBox.jsx";
import Scroll from "/src/Components/Scroll.jsx";
import { Component } from "react";
import "/src/Container/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      SearchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ SearchField: event.target.value });
  };

  render() {
    const FilteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.SearchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1 id="one">lOADING</h1>;
    } else {
      return (
        <div className="Title">
          <h1 id="one">RoboFriends</h1>
          <SearchBox SearchChange={this.onSearchChange} />
          <Scroll>
            <Cardlist robots={FilteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
