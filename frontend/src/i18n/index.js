import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import wookie from "./wookie";

const initI18n = () =>
	i18n
		.use(initReactI18next) // passes i18n down to react-i18next
		.init({
			resources: {
				en: { translation: en },
				wo: { translation: wookie },
			},
			lng: "en",
			fallbackLng: "wo",

			interpolation: {
				escapeValue: false,
			},
		});

export default initI18n;
