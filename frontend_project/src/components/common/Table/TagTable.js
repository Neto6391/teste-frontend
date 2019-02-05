import React from "react";

export default function TagTable({ tag, data }) {
	const content = tag === "th" ? <th>{data}</th> : <td>{data}</td>;

	return content;
}
