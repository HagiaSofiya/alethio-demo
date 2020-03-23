import React from "react";
import {
	Route,
	Switch,
	Redirect,
	withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Monitoring from "../../pages/monitoring";
import Tables from "../../pages/tables";
import API from "../../pages/api";
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
	let classes = useStyles();

	// global
	let layoutState = useLayoutState();

	return (
		<div className={classes.root}>
				<>
					<Header history={props.history} />
					<Sidebar />
					<div
						className={classnames(classes.content, {
							[classes.contentShift]: layoutState.isSidebarOpened,
						})}
					>
						<div className={classes.fakeToolbar} />
						<Switch>
							<Route path="/app/dashboard" component={Dashboard} />
							<Route path="/app/monitoring" component={Monitoring} />	
							<Route path="/app/tables" component={Tables} />
							<Route path="/app/charts" component={Charts} />
							<Route path="/app/api" component={API} />
							<Route
								exact
								path="/app/api"
								render={() => <Redirect to="/app/api" />}
							/>
							<Route path="/app/api" component={API} />
						</Switch>
					</div>
				</>
		</div>
	);
}

export default withRouter(Layout);
