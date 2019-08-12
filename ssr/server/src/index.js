import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import Home from "./client/components/Home";

const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Listening to port 3000");
});

app.get("/", (req, res, next) => {
  const content = ReactDOM.renderToString(<Home />);
  const html = `
  <html>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
  res.send(html);
});
