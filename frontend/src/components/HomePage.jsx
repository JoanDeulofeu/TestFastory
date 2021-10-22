import { Button, TextField, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import * as React from "react";
import CategorySelector from "./CategorySelector";
import DataPaper from "./DataPaper";
import ErrorPaper from "./ErrorPaper";
import i18n from "i18next";
import { withTranslation } from "react-i18next";

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			padding: 100,
		},
		translationBar: {
			display: "flex",
			justifyContent: "right",
			alignItems: "center",
			flex: 1,
			marginBottom: 20,
		},
		searchBar: {
			display: "flex",
			justifyContent: "space-around",
			flex: 1,
		},
	})
);

const HomePage = () => {
	const styles = useStyles();

	const [category, setCategory] = React.useState("");
	const [id, setId] = React.useState("");
	const [data, setData] = React.useState();
	const [error, setError] = React.useState(false);

	const updateCategory = (event) => setCategory(event.target.value);
	const updateId = (event) => setId(event.target.value);

	const getData = async () => {
		setData();
		setError(false);
		const res = await fetch(`http://localhost:8080/${category}/${id}`);
		const text = JSON.parse(await res.text());
		if (text.statusCode !== 404 && text.detail !== "Not found") {
			setData(text);
		} else {
			setError(true);
		}
	};

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng === "wo" ? "en" : "wo");
	};

	return (
		<div className={styles.container}>
			<div className={styles.translationBar}>
				<Typography variant="body1">{`${i18n.t("language")} :  `}</Typography>
				<Button
					variant="contained"
					color={i18n.language === "en" ? "primary" : "secondary"}
					onClick={() => changeLanguage(i18n.language)}
				>
					{i18n.t("wookie")}
				</Button>
			</div>
			<div className={styles.searchBar}>
				<CategorySelector category={category} updateCategory={updateCategory} />
				<TextField
					label={i18n.t("id")}
					variant="outlined"
					value={id}
					onChange={updateId}
				/>
				<Button variant="contained" onClick={getData}>
					{i18n.t("send")}
				</Button>
			</div>
			{data && !error && <DataPaper data={data} />}
			{error && <ErrorPaper error={error} />}
		</div>
	);
};

export default withTranslation("defaultNamespace")(HomePage);
