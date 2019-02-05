import React from "react";

import TagTable from "./TagTable";
import TableRow from "./TableRow";

export default function Table({ headerTable, data, id }) {
	return (
		<table id={id}>
			<thead>
				<tr>
					{headerTable.map((hs, i) => (
						<TagTable key={i.toString()} tag={"th"} data={hs} />
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((data, i) => (
					<tr key={i.toString()}>
						<TableRow tag={"td"} data={data} />
					</tr>
				))}
			</tbody>
		</table>
	);
}
