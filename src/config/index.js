import dotenv from 'dotenv';

const envs = dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (envs.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config = {
    port: process.env.PORT,
    session_secret: process.env.SESSION_SECRET,
    MAIN_URI: (process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '')
}

export default config