import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamView from "./streams/StreamView";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import Login from "./Login";

const App: React.FC = () => {
  return (
    <>
      <h1>Header Component</h1>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/streams" component={StreamList} />
        <Route path="/streams/create" component={StreamCreate} />
        <Route path="/streams/:id" component={StreamView} />
        <Route path="/streams/:id/edit" component={StreamEdit} />
        <Route path="/streams/:id/delete" component={StreamDelete} />
      </BrowserRouter>
    </>
  );
};

export default App;
