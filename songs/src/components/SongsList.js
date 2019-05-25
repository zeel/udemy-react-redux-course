import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import "./SongsList.css";

const mapStateToProps = (state) => state;
const map
class SongsList extends React.PureComponent {
  static propTypes = {
    songs: PropTypes.arrayOf({
      title: PropTypes.string,
      length: PropTypes.number
    }),
    onSongSelect: PropTypes.func.isRequired,
    selectedSongIndex: PropTypes.number
  };
  renderSongItem = (song, index) => {
    return (
      <div className="songs-list__item">
        <span className="songs-list__item-name">{song.title}</span>
        <button
          className={`songs-list__item-button ${this.props.selectedSongIndex ===
            index && "songs-list__item-button--selected"}`}
          onClick={this.props.onSongSelect.bind(undefined, index)}
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
export default connect(mapStateToProps,)(SongsList);
