import React from "react";
import { Grid } from "@material-ui/core";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import BigStat from "../dashboard/components/BigStat/BigStat";
import mock from "../dashboard/mock";


export default function DeploymentsPage () {

	return (
	<>
		<PageTitle title="Deployments" button="New Key" />
		<Grid container spacing={4}>				
			{mock.bigStat.map(stat => (
				<Grid item md={4} sm={6} xs={12} key={stat.product}>
					<BigStat {...stat} />
				</Grid>
			))}
		</Grid>
	</>
);}
