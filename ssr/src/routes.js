import React from "react";
import { Route } from "react-router-dom";
import Home from "./client/components/Home";

export default () => (
  <div>
    <Route path="/" component={Home} />
    <Route path="/users" component={Home} />
    <Route path="/admins" component={Home} />
    <Route path="/auth/google" component={Home} />
  </div>
);
