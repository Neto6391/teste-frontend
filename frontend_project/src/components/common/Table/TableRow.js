import React from "react";

import TagTable from "./TagTable";

export default function TableRow({ tag, data }) {
	let content =
		typeof data === "object" ? (
			Object.keys(data).map((key, i) => (
				<TagTable key={i} tag={tag} data={data[key]} />
			))
		) : (
			<TagTable tag={tag} data={data} />
		);

	return content;
}
