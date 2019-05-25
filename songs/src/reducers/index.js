import { combineReducers } from "redux";
import songs from "./songs";
import selectedSong from "./selectedSong";

export default combineReducers({ songs, selectedSong });
