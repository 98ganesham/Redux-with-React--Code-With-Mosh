import { combineReducers } from "redux";
import bugReducers from "./bugs";
import projectReducers from "./projects";
import usersReducer from './users';


export default combineReducers({
    bugs: bugReducers,
    projects: projectReducers,
   users: usersReducer
})