export default function(selectedSong, action) {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return null;
}
