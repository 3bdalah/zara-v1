import {combineReducers} from "redux";
import reminders from "../reducers/Reducer";
import Cart from "../Actions/Reducer";
export default  combineReducers({
     productss:reminders,
     Cart
});