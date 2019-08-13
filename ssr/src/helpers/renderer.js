import React from "react";
import ReactDOM from "react-dom/server";
import { StaticRouter } from "react-router";
import Routes from "../routes";

export default req => {
  const content = ReactDOM.renderToString(
    <StaticRouter context={{}} location={req.url}>
      <Routes />
    </StaticRouter>
  );
  return `
  <html>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
};
