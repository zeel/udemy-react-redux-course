import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import Home from "./client/components/Home";

const app = express();
app.listen(3000, () => {
  console.log("Listening to port 3000");
});

app.get("/", (req, res, next) => {
  const content = ReactDOM.renderToString(<Home />);
  res.send(content);
});
