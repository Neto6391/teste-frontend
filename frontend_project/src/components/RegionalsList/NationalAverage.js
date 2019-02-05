import React from "react";

export default function NationalAverage(props) {
	const { national } = props;
	return (
		<div id="average-national">
			Média Nacional
			<span className="border-top">{national}</span>
		</div>
	);
}
