import React from "react";
import SongList from "./SongsList";
import SongDetails from "./SongDetails";
import "./App.css";
class App extends React.Component {
  state = {
    selectedSongIndex: null,
    songs: [
      { title: "Naa Samajh", length: 5 },
      { title: "Dekhte Dekhte", length: 2 },
      { title: "Paniyon Sa", length: 3 },
      { title: "Jitni Dafa", length: 4 }
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
