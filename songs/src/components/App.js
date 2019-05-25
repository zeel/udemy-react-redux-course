import React from "react";
import SongList from "./SongsList";
import SongDetails from "./SongDetails";
import { connect } from "react-redux";
import { selectSong } from "../actions";

import "./App.css";

class App extends React.Component {
  render() {
    const { selectedSong, songs, onSongSelect } = this.props;
    return (
      <div className="app-container">
        <SongList
          songs={songs}
          onSongSelect={onSongSelect}
          selectedSong={selectedSong}
        />
        <div className="dummy-element" />
        {selectedSong !== null && <SongDetails song={selectedSong} />}
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  {
    onSongSelect: selectSong
  }
)(App);
