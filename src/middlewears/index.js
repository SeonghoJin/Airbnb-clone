import allowStatic from './allowStatic.js'
import session from './session.js'
import express from 'express'

export default (expressApp) => {
    allowStatic(expressApp);
    session(expressApp)
    expressApp.use(express.json())
}