import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
	// const options = {
	// 	method:"GET",
	// 	headers: {
	// 		accept: "application/json",
	// 		Authorization: "Bearer eb421943feb941d0c81633519bb8f606",
	// 	},
	// };
	const options = {
		params: {
        api_key: "eb421943feb941d0c81633519bb8f606",
      }}
	const response = await axios.get(url, options);
	if (response.status !== 200) {
		throw new Error("Failed to fetch data from TMDB" + response.statusText);
	}

	return response.data;
};
