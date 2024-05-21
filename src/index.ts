import express from 'express';
import { config } from 'dotenv';

config()

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});