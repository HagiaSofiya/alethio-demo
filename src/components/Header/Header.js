import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	InputBase
} from "@material-ui/core";
import {
	Menu as MenuIcon,
	Search as SearchIcon,
	ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import { Typography  } from "../Wrappers/Wrappers";

// context
import {
	useLayoutState,
	useLayoutDispatch,
	toggleSidebar,
} from "../../context/LayoutContext";



export default function Header(props) {
	let classes = useStyles();

	// global
	let layoutState = useLayoutState();
	let layoutDispatch = useLayoutDispatch();

	let [isSearchOpen, setSearchOpen] = useState(false);

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<IconButton
					color="inherit"
					onClick={() => toggleSidebar(layoutDispatch)}
					className={classNames(
						classes.headerMenuButton,
						classes.headerMenuButtonCollapse,
					)}
				>
					{layoutState.isSidebarOpened ? (
						<ArrowBackIcon
							classes={{
								root: classNames(
									classes.headerIcon,
									classes.headerIconCollapse,
								),
							}}
						/>
					) : (
							<MenuIcon
								classes={{
									root: classNames(
										classes.headerIcon,
										classes.headerIconCollapse,
									),
								}}
							/>
						)}
				</IconButton>
				<Typography variant="h6" weight="bold" className={classes.logotype}>
					ALETHIO DASHBOARD
				</Typography>
				<div className={classes.grow} />
				<div
					className={classNames(classes.search, {
						[classes.searchFocused]: isSearchOpen,
					})}
				>
					<div
						className={classNames(classes.searchIcon, {
							[classes.searchIconOpened]: isSearchOpen,
						})}
						onClick={() => setSearchOpen(!isSearchOpen)}
					>
						<SearchIcon classes={{ root: classes.headerIcon }} />
					</div>
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
					/>
				</div>
			</Toolbar>
		</AppBar>
	);
}
