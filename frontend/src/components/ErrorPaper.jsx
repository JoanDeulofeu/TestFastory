import * as React from "react";
import { Paper, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import i18n from "i18next";

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

const ErrorPaper = () => {
	const styles = useStyles();

	return (
		<Paper elevation={3} className={styles.container}>
			<Typography variant="h4" className={styles.title}>
				{i18n.t("error.1")}
			</Typography>
			<Typography variant="h5" className={styles.title}>
				{i18n.t("error.2")}
			</Typography>
		</Paper>
	);
};

export default ErrorPaper;
