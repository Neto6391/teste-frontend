import React from "react";

import Table from "../common/Table/Table";
import NationalAverage from "./NationalAverage";

export default function RegionalsItems({ data, national }) {
	const data1 = data.slice(0, 14);
	const data2 = data.slice(14, data.length);

	return (
		<div className="RegionalsItems">
			<div id="tables">
				<Table
					id={"students-senai1"}
					headerTable={["Regional", "Média"]}
					data={data1}
				/>
				<Table
					id={"students-senai2"}
					headerTable={["Regional", "Média"]}
					data={data2}
				/>
			</div>

			<div id="average-block">
				<NationalAverage national={national} />
			</div>
		</div>
	);
}
