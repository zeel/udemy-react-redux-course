import React, { useState, useEffect } from "react";
import jsonPlaceholderApi from "../apis/jsonplaceholder";
const useResource = resource => {
  const [resourceList, setResourceList] = useState([]);
  useEffect(() => {
    if (resource === "posts" || resource === "todos") {
      jsonPlaceholderApi.get(resource).then(response => {
        setResourceList(response.data);
      });
    }
  }, [resource]);
  return resourceList;
};
export default props => {
  const resourceList = useResource(props.resource);
  return (
    <ul>
      {resourceList &&
        resourceList.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>
  );
};
