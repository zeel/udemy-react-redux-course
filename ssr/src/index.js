import express from "express";
import renderer from "./helpers/renderer";
const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Listening to port 3000");
});

app.get("*", (req, res, next) => {
  res.send(renderer(req));
});
