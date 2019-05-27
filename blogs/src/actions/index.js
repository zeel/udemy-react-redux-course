import jsonPlaceholder from "../apis/jsonPlaceholder";
import _memoize from "lodash/memoize";

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

const _fetchUser = _memoize(async (userId, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({
    type: "FETCH_USER_NAME",
    payload: { userId, name: response.data.name }
  });
});

export const fetchUserName = userId => async dispatch =>
  _fetchUser(userId, dispatch);
