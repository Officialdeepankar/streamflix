import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
	MONGO_URI:"mongodb+srv://deepankar:deep_123@cluster0.gourypm.mongodb.net/tmdb?retryWrites=true&w=majority&appName=Cluster0",
	PORT: process.env.PORT || 3000,
	JWT_SECRET: "secret",
	NODE_ENV: process.env.NODE_ENV,
	TMDB_API_KEY: "eb421943feb941d0c81633519bb8f606",
};
