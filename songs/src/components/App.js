import React from "react";
import SongList from "./SongsList";
import SongDetails from "./SongDetails";
import "./App.css";
class App extends React.Component {
  state = {
    selectedSongIndex: null,
    songs: [
      { title: "Song 1", length: 5 },
      { title: "Song 2", length: 2 },
      { title: "Song 3", length: 3 },
      { title: "Song 4", length: 4 }
    ]
  };
  onSongSelect = index => {
    this.setState({ selectedSongIndex: index });
  };
  render() {
    const selectedSongIndex = this.state.selectedSongIndex;
    return (
      <div className="app-container">
        <SongList
          songs={this.state.songs}
          onSongSelect={this.onSongSelect}
          selectedSongIndex={selectedSongIndex}
        />
        <div className="dummy-element" />
        {selectedSongIndex !== null && (
          <SongDetails song={this.state.songs[selectedSongIndex]} />
        )}
      </div>
    );
  }
}
export default App;
