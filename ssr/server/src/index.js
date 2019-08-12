<<<<<<< HEAD
const express = require("express");
const React = require("react");
const ReactDOM = require("react-dom/server");
const Home = require("./client/components/Home").default;

const app = express();
=======
import express from "express";
import renderer from "./helpers/renderer";
const app = express();

app.use(express.static("public"));

>>>>>>> 3b137950efce547e23286b561752b17d26016ac6
app.listen(3000, () => {
  console.log("Listening to port 3000");
});

app.get("/", (req, res, next) => {
<<<<<<< HEAD
  const content = ReactDOM.renderToString(<Home />);
  res.send(content);
=======
  res.send(renderer());
>>>>>>> 3b137950efce547e23286b561752b17d26016ac6
});
