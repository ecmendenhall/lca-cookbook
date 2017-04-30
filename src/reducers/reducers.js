import {combineReducers} from 'redux';
import ingredients from './ingredients-reducer'

const rootReducer = combineReducers({
  ingredients
});

export default rootReducer;
