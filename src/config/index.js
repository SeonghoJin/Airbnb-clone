import dotenv from 'dotenv';

const envs = dotenv.config();

if (envs.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config = {
    port: process.env.PORT,
    session_secret: process.env.SESSION_SECRET
}

export default config