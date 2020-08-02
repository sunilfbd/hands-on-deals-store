import { createStore } from 'redux'
import rootReducer from './reducers';

let Store = createStore(
    rootReducer,
    window.devToolsExtension ? window.devToolsExtension() : f => f
    );

export default Store;