import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";
import mock from "../dashboard/mock";
export default function MonitoringPage() {
	let classes = useStyles();

	return (
		<>
			<PageTitle title="Montoring" />
			<Grid container spacing={4}>
				<Grid item xs={12}>
					<Widget
						title="Alert List"
						upperTitle
						noBodyPadding
						bodyClass={classes.tableWidget}
					>
						<Table data={mock.table} />
					</Widget>
				</Grid>
			</Grid>
		</>
	);
}
