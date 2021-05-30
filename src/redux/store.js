// Global Store
import { createStore, combineReducers } from 'redux';
import { loginReducer } from './login';

const allReducers = combineReducers({ loginReducer });

const store = createStore(allReducers);

console.log(store.getState());

export default store;
