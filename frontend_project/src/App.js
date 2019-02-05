import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import RegionalsList from "./components/RegionalsList/RegionalsList";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header text={"Relatório"} />
				<RegionalsList />
			</div>
		);
	}
}

export default App;
