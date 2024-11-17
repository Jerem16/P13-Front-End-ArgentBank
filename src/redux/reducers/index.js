import { combineReducers } from "redux";
import usersReducer from "./authSlice";


const rootReducer = combineReducers({
    users: usersReducer,
});

export default rootReducer;
