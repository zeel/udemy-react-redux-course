import React, { useState } from "react";
import ResourceList from "./ResourceList";
export default () => {
  const [selectedResource, setSelectedResource] = useState(null);

  return (
    <div className="ui container">
      <div className="">
        <button
          className={`ui button ${selectedResource === "posts" && "blue"}`}
          onClick={() => setSelectedResource("posts")}
        >
          Posts
        </button>
        <button
          className={`ui button ${selectedResource === "posts" && "blue"}`}
          onClick={() => setSelectedResource("todos")}
        >
          Todos
        </button>
      </div>
      <ResourceList resource={selectedResource} />
    </div>
  );
};
