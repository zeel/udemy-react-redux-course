import React, { useState, useEffect } from "react";
import jsonPlaceholderApi from "../apis/jsonplaceholder";
export default props => {
  const [resourceList, setResourceList] = useState([]);
  useEffect(() => {
    if (props.resource === "posts" || props.resource === "todos") {
      jsonPlaceholderApi.get(props.resource).then(response => {
        setResourceList(response.data);
      });
    }
  }, [props.resource]);
  return (
    <ul>{resourceList && resourceList.map(item => <li>{item.title}</li>)}</ul>
  );
};
