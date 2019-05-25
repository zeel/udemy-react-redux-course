import React from "react";
import PropTypes from "prop-types";

import "./SongsList.css";

class SongsList extends React.PureComponent {
  static propTypes = {
    songs: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        length: PropTypes.number
      })
    ),
    onSongSelect: PropTypes.func.isRequired,
    selectedSong: PropTypes.object
  };
  renderSongItem = (song, index) => {
    return (
      <div className="songs-list__item" key={index}>
        <span className="songs-list__item-name">{song.title}</span>
        <button
          className={`songs-list__item-button ${this.props.selectedSong &&
            this.props.selectedSong.title === song.title &&
            "songs-list__item-button--selected"}`}
          onClick={this.props.onSongSelect.bind(undefined, song)}
        >
          Select
        </button>
      </div>
    );
  };
  render() {
    const songsNode = this.props.songs.map((song, index) =>
      this.renderSongItem(song, index)
    );
    return <div className="songs-list">{songsNode}</div>;
  }
}

export default SongsList;
