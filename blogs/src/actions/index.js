import jsonPlaceholder from "../apis/jsonPlaceholder";

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
