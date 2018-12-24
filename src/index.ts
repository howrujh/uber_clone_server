import { Options } from "graphql-yoga";
import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

import connectOptions from './ormConfig';

import app from "./app";


const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHGQ_ENDPOINT: string = "/graphql"

const appOptions: Options = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHGQ_ENDPOINT,
}


const handleAppStart = () => {
    console.log(`Listening on port ${PORT}`);
}

createConnection(connectOptions).then(() => {
    app.start(appOptions, handleAppStart);
})
    .catch(err => console.log(err));
