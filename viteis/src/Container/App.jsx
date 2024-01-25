import Cardlist from "/src/Components/Cardlist.jsx";
import SearchBox from "/src/Components/SearchBox.jsx";
import Scroll from "/src/Components/Scroll.jsx";
import ErrorBoundary from "/src/Components/ErrorBoundary.jsx";
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
    const { robots, SearchField } = this.state;
    const FilteredRobots = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(SearchField.toLowerCase());
    });
    return !robots.length ? (
      <h1 id="one">lOADING</h1>
    ) : (
      <div className="Title">
        <h1 id="one">RoboFriends</h1>
        <SearchBox SearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <Cardlist robots={FilteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
export default App;
