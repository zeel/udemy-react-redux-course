import jsonPlaceholder from "../apis/jsonPlaceholder";
// import _memoize from "lodash/memoize";
import _uniq from "lodash/uniq";
import _map from "lodash/map";

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUserName = userId => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({
    type: "FETCH_USER_NAME",
    payload: { userId, name: response.data.name }
  });
};

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost());
  const posts = getState().posts;
  _uniq(_map(posts, "userId")).forEach(userId =>
    dispatch(fetchUserName(userId))
  );
};

// const _fetchUser = _memoize(async (userId, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${userId}`);
//   dispatch({
//     type: "FETCH_USER_NAME",
//     payload: { userId, name: response.data.name }
//   });
// });

// export const fetchUserName = userId => async dispatch =>
//   _fetchUser(userId, dispatch);
