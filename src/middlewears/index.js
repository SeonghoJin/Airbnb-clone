import allowStatic from './allowStatic.js'
import session from './session.js'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

export default (expressApp) => {
    allowStatic(expressApp);
    session(expressApp)
    expressApp.use(express.json())
    expressApp.use(cors());
    expressApp.use(cookieParser());
}