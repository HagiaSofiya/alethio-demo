import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
	Home as HomeIcon,
	GraphicEq as MonitoringIcon,
	Assessment as ReportingIcon,
	Code as APIIcon,
	Explore as ExploreIcon,
	Equalizer as EthStatsIcon,
	MultilineChart as DEXWatchIcon,
	ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
	useLayoutState,
	useLayoutDispatch,
	toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
	{ 
		id: 0, 
		label: "Dashboard",
		link: "/app/dashboard", 
		icon: <HomeIcon />
	},
	{
		id: 1,
		label: "Monitoring",
		link: "/app/monitoring",
		icon: <MonitoringIcon />
	},
	{ 
		id: 2, 
		label: "Reporting",
		link: "/app/charts",
		icon: <ReportingIcon />
	},
	{
		id: 3,
		label: "API",
		link: "/app/api",
		icon: <APIIcon />,
		children: [
			{ label: "Deployments", link: "/app/api" },
			{ label: "Pricing", link: "" },
			{ label: "Docs", link: "" },
		],
	},
	{ 
		id: 4, 
		type: "divider" 
	},
	{ 
		id: 5, 
		type: "title", 
		label: "APPS" },
	{ 
		id: 6, 
		label: "Explorer", 
		link: "", 
		icon: <ExploreIcon /> 
	},
	{ 
		id: 7, 
		label: "EthStats", 
		link: "", 
		icon: <EthStatsIcon /> 
	},
	{ 
		id: 8, 
		label: "DEXWatch", 
		link: "", 
		icon: <DEXWatchIcon /> 
	},
	{ 
		id: 9, 
		type: "divider" 
	},
	{ 
		id: 10, 
		type: "title", 
		label: "PROJECTS" 
	},
	{
		id: 11,
		label: "Project Alpha",
		link: "",
		icon: <Dot size="large" color="warning" />,
	},
	{
		id: 12,
		label: "Project Beta",
		link: "",
		icon: <Dot size="large" color="primary" />,
	}
];

function Sidebar({ location }) {
	let classes = useStyles();
	let theme = useTheme();

	// global
	let { isSidebarOpened } = useLayoutState();
	let layoutDispatch = useLayoutDispatch();

	// local
	let [isPermanent, setPermanent] = useState(true);

	useEffect(function() {
		window.addEventListener("resize", handleWindowWidthChange);
		handleWindowWidthChange();
		return function cleanup() {
			window.removeEventListener("resize", handleWindowWidthChange);
		};
	});

	return (
		<Drawer
			variant={isPermanent ? "permanent" : "temporary"}
			className={classNames(classes.drawer, {
				[classes.drawerOpen]: isSidebarOpened,
				[classes.drawerClose]: !isSidebarOpened,
			})}
			classes={{
				paper: classNames({
					[classes.drawerOpen]: isSidebarOpened,
					[classes.drawerClose]: !isSidebarOpened,
				}),
			}}
			open={isSidebarOpened}
		>
			<div className={classes.toolbar} />
			<div className={classes.mobileBackButton}>
				<IconButton onClick={() => toggleSidebar(layoutDispatch)}>
					<ArrowBackIcon
						classes={{
							root: classNames(classes.headerIcon, classes.headerIconCollapse),
						}}
					/>
				</IconButton>
			</div>
			<List className={classes.sidebarList}>
				{structure.map(link => (
					<SidebarLink
						key={link.id}
						location={location}
						isSidebarOpened={isSidebarOpened}
						{...link}
					/>
				))}
			</List>
		</Drawer>
	);

	// ##################################################################
	function handleWindowWidthChange() {
		let windowWidth = window.innerWidth;
		let breakpointWidth = theme.breakpoints.values.md;
		let isSmallScreen = windowWidth < breakpointWidth;

		if (isSmallScreen && isPermanent) {
			setPermanent(false);
		} else if (!isSmallScreen && !isPermanent) {
			setPermanent(true);
		}
	}
}

export default withRouter(Sidebar);
