import config from 'config';
import express from 'express';
import log from "./logger";
import connect from "./db/connect";

const port = config.get('port') as number;
const host = config.get('host') as string;

const app = express();
app.use(deserializeUser);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, host, () => {
    log.info(`Server listening at http://${host}:${port}`);
    connect();
    sampleRoute(app);
    userRoute(app);
})
