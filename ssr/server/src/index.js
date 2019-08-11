const express = require("express");
const React = require("react");
const ReactDOM = require("react-dom/server");
const Home = require("./client/components/Home").default;

const app = express();
app.listen(3000, () => {
  console.log("Listening to port 3000");
});

app.get("/", (req, res, next) => {
  const content = ReactDOM.renderToString(<Home />);
  res.send(content);
});
