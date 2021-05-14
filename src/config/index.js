import dotenv from 'dotenv';

const envs = dotenv.config();

if (envs.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    port: process.env.PORT
}