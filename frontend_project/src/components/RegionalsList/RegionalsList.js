import React, { Component } from "react";
import axios from "axios";

import RegionalsItems from "./RegionalsItems";
import Spinner from "../common/Spinner/Spinner";

class RegionalsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentWillMount() {
		axios.get("data.json").then(res => {
			const data = res.data;
			this.setState({ data });
		});
	}

	render() {
		return (
			<div>
				{this.state.data.length === 0 ? (
					<Spinner />
				) : (
					<RegionalsItems
						national={this.state.data.national}
						data={this.state.data.regionals}
					/>
				)}
			</div>
		);
	}
}

export default RegionalsList;
