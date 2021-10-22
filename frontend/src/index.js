import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./components/HomePage.jsx";
import initI18n from "./i18n";

initI18n();

ReactDOM.render(
	<React.StrictMode>
		<HomePage />
	</React.StrictMode>,
	document.getElementById("root")
);
