import { Component } from "react";
class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasErrors: false,
		};
	}

	componentDidCatch(error, info) {
		this.state({ hasErrors: true });
	}
	render() {
		if (this.state.hasErrors) {
			return <h1 id="one"> Oooops.There is an Error</h1>;
		}
		return this.props.children;
	}
}
export default ErrorBoundary;
