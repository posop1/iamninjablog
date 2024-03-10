/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { logger } from "./libs/logger";
import httpLogger from "pino-http";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(httpLogger());

app.get("/", (req, res) => res.send("asdasdasdasd"));

const startServer = () => {
	try {
		app.listen(PORT, () => {
			logger.info(`Server listening port:${PORT}`);
		});
	} catch (error) {
		logger.error(error);
	}
};

startServer();
