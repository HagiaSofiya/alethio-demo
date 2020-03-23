import React, { useState } from "react";
import {
	Grid,
	Select,
	OutlinedInput,
	MenuItem,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
	ResponsiveContainer,
	ComposedChart,
	Line,
	Area,
	YAxis,
	XAxis,
} from "recharts";

// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import SubTitle from "../../components/SubTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";
import Charts from '../charts/Charts'

const mainChartData = getMainChartData();

export default function Dashboard(props) {
	let classes = useStyles();
	let theme = useTheme();

	// local
	let [mainChartState, setMainChartState] = useState("monthly");

	return (
		<>
			<PageTitle title="Dashboard"/>
			<Grid container spacing={4}>				
				<Grid item xs={12}>
					<Widget
						bodyClass={classes.mainChartBody}
						header={
							<div className={classes.mainChartHeader}>
								<Typography
									variant="h5"
									color="text"
									colorBrightness="secondary"
								>
									Daily Line Chart
								</Typography>
								<div className={classes.mainChartHeaderLabels}>
									<div className={classes.mainChartHeaderLabel}>
										<Dot color="warning" />
										<Typography className={classes.mainChartLegentElement}>
											Metric One
										</Typography>
									</div>
									<div className={classes.mainChartHeaderLabel}>
										<Dot color="primary" />
										<Typography className={classes.mainChartLegentElement}>
											Metric Two
										</Typography>
									</div>
									<div className={classes.mainChartHeaderLabel}>
										<Dot color="primary" />
										<Typography className={classes.mainChartLegentElement}>
											Metric Three
										</Typography>
									</div>
								</div>
								<Select
									value={mainChartState}
									onChange={e => setMainChartState(e.target.value)}
									input={
										<OutlinedInput
											labelWidth={0}
											classes={{
												notchedOutline: classes.mainChartSelectRoot,
												input: classes.mainChartSelect,
											}}
										/>
									}
									autoWidth
								>
									<MenuItem value="daily">Daily</MenuItem>
									<MenuItem value="weekly">Weekly</MenuItem>
									<MenuItem value="monthly">Monthly</MenuItem>
								</Select>
							</div>
						}
					>
						<ResponsiveContainer width="100%" minWidth={500} height={350}>
							<ComposedChart
								margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
								data={mainChartData}
							>
								<YAxis
									ticks={[0, 2500, 5000, 7500]}
									tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
									stroke={theme.palette.text.hint + "80"}
									tickLine={false}
								/>
								<XAxis
									tickFormatter={i => i + 1}
									tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
									stroke={theme.palette.text.hint + "80"}
									tickLine={false}
								/>
								<Area
									type="natural"
									dataKey="desktop"
									fill={theme.palette.background.light}
									strokeWidth={0}
									activeDot={false}
								/>
								<Line
									type="natural"
									dataKey="mobile"
									stroke={theme.palette.primary.main}
									strokeWidth={2}
									dot={false}
									activeDot={false}
								/>
								<Line
									type="linear"
									dataKey="tablet"
									stroke={theme.palette.warning.main}
									strokeWidth={2}
									dot={{
										stroke: theme.palette.warning.dark,
										strokeWidth: 2,
										fill: theme.palette.warning.main,
									}}
								/>
							</ComposedChart>
						</ResponsiveContainer>
					</Widget>
				</Grid>
				<Grid item xs={12}>
					<SubTitle title="API Deployments" button="API Page" />
				</Grid>
				{mock.bigStat.map(stat => (
					<Grid item md={4} sm={6} xs={12} key={stat.product}>
						<BigStat {...stat} />
					</Grid>
				))}
				<Grid item xs={12}>
					<SubTitle title="Monitoring" button="Monitoring Page" />
				</Grid>
				<Grid item xs={12}>
					<Widget
						title="Support Requests"
						upperTitle
						noBodyPadding
						bodyClass={classes.tableWidget}
					>
						<Table data={mock.table} />
					</Widget>
				</Grid>
			</Grid>
			<Charts />
		</>
	);
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
	let array = new Array(length).fill();
	let lastValue;

	return array.map((item, index) => {
		let randomValue = Math.floor(Math.random() * multiplier + 1);

		while (
			randomValue <= min ||
			randomValue >= max ||
			(lastValue && randomValue - lastValue > maxDiff)
		) {
			randomValue = Math.floor(Math.random() * multiplier + 1);
		}

		lastValue = randomValue;

		return { value: randomValue };
	});
}

function getMainChartData() {
	let resultArray = [];
	let tablet = getRandomData(31, 3500, 6500, 7500, 1000);
	let desktop = getRandomData(31, 1500, 7500, 7500, 1500);
	let mobile = getRandomData(31, 1500, 7500, 7500, 1500);

	for (let i = 0; i < tablet.length; i++) {
		resultArray.push({
			tablet: tablet[i].value,
			desktop: desktop[i].value,
			mobile: mobile[i].value,
		});
	}

	return resultArray;
}
