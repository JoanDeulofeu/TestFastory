import { Paper, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import moment from "moment";
import * as React from "react";

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			margin: 100,
			padding: 20,
		},
		title: {
			textAlign: "center",
			marginBottom: 20,
		},
	})
);

const DataPaper = ({ data }) => {
	const styles = useStyles();

	return (
		<Paper elevation={3} className={styles.container}>
			<Typography variant="h3" className={styles.title}>{`${
				data.name ? data.name : data.title
			}`}</Typography>
			{Object.keys(data).map((_key) => {
				if (typeof data[_key] === "string") {
					// format the dates so that they are readable
					const value =
						_key === "created" || _key === "edited"
							? moment(new Date(data[_key])).format("MMMM Do YYYY, h:mm:ss")
							: data[_key];
					return (
						<Typography
							key={_key}
							variant="body1"
						>{`${_key}: ${value}`}</Typography>
					);
				} else if (Array.isArray(data[_key]))
					return (
						<div key={_key}>
							<Typography variant="body1">{`${_key}:`}</Typography>
							{data[_key].map((_el) => (
								<Typography key={_el} variant="body1">{`- ${_el}`}</Typography>
							))}
						</div>
					);
				else return undefined;
			})}
		</Paper>
	);
};

export default DataPaper;
