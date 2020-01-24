import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Listening to port 3000");
});

app.get("*", (req, res, next) => {
  const store = createStore();
  // some way to initialize and load data into the store
  res.send(renderer(req, store));
});
