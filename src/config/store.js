import { createStore, applyMiddleware } from "redux";
import globalReducers from '../reducers';

import currentUSerInitialState from '../reducers/currentUser/initialState';

const initialState = {
    currentUser: currentUSerInitialState
}

export default createStore(globalReducers,initialState);