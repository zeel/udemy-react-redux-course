export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      posts = action.payload;
      break;
    default:
      break;
  }
  return posts;
};
