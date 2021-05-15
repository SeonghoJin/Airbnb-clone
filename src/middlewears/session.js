import session from 'express-session'
import NedbStore from 'connect-nedb-session'
import config from '../config/index.js'

export default (app) => {
    const nedbStore = new NedbStore(session);
    app.use(session({
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 31
        },
        secret: config.session_secret,
        store: new nedbStore({ filename: 'session.nedb' })
    }))
}
