import { createStore, combineReducers, applyMiddleware } from "redux";
import cashReducer from "./cashReducer";
import customerReducer from "./customerReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;