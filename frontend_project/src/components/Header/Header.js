import React from "react";

export default function Header({ text }) {
	return (
		<div className="header">
			<span className="align-header">
				<h1>{text}</h1>
			</span>
		</div>
	);
}
