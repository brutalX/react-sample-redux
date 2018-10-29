import { combineReducers } from "redux";
import UserReducer from "./reducer-users";
import ActiveUserReducer from "./reducer-active-user";
import NavClick from "./reducer-nav";
const allReducers = combineReducers({
  userred: UserReducer,
  activeUser: ActiveUserReducer,
  navclick: NavClick
});

export default allReducers;
