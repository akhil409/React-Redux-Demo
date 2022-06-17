import { createStore , applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../RootReducer';
import logger from 'redux-logger';
import cakeReducer from './CakeReducer';


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))

export default store;