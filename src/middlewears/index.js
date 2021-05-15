import allowStatic from './allowStatic.js'
import session from './session.js'

export default (expressApp) => {
    allowStatic(expressApp);
    session(expressApp)
}