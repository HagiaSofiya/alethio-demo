import React from "react";
import {
	Table,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@material-ui/core";

// components
import { Button } from "../../../../components/Wrappers";


export default function TableComponent({ data }) {
	let keys = Object.keys(data[0]).map(i => i.toUpperCase());
	keys.shift(); // delete "id" key

	return (
		<Table className="mb-0">
			<TableHead>
				<TableRow>
					{keys.map(key => (
						<TableCell key={key}>{key}</TableCell>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{data.map(({ id, target , metric, condition, date, block }) => (
					<TableRow key={id}>
						<TableCell className="pl-3 fw-normal">{target}</TableCell>
						<TableCell>
							<Button
								color='info'
								size="small"
								className="px-2"
								variant="contained"
							>
								{metric}
							</Button>
						</TableCell>
						<TableCell>{condition}</TableCell>
						<TableCell>{date}</TableCell>
						<TableCell>
							<Button
								color="primary"
								size="small"
								className="px-2"
								variant="contained"
							>
								{block}
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
