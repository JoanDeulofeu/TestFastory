import * as React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import i18n from "i18next";

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			width: 300,
		},
	})
);

const CATEGORY = [
	"people",
	"planets",
	"films",
	"species",
	"vehicles",
	"starships",
];

const CategorySelector = ({ category, updateCategory }) => {
	const styles = useStyles();

	return (
		<FormControl>
			<InputLabel>{i18n.t("category")}</InputLabel>
			<Select
				value={category}
				label={i18n.t("category")}
				onChange={updateCategory}
				className={styles.container}
			>
				{CATEGORY.map((_category) => (
					<MenuItem key={_category} value={_category}>
						{_category}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default CategorySelector;
