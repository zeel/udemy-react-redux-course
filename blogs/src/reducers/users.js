export default (users = [], action) => {
  switch (action.type) {
    case "FETCH_USER_NAME":
      users = [action.payload, ...users];
      break;
    default:
      break;
  }
  return users;
};
