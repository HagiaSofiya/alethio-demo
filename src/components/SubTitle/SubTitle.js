import React from "react";
import { Button } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";

export default function SubTitle(props) {
	let classes = useStyles();

	return (
		<div className={classes.pageTitleContainer}>
			<Typography className={classes.typo} variant="h2" size="sm">
				{props.title}
			</Typography>
			{props.button && (
				<Button
					classes={{ root: classes.button }}
					variant="contained"
					size="large"
					color="secondary"
				>
					{props.button}
				</Button>
			)}
		</div>
	);
}
