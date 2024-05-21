import express from 'express';
import { config } from 'dotenv';

import router from './Routes';

config()

const app = express();

app.use(express.json());
app.use('/api', router)

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});