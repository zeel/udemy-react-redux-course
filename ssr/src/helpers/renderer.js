import React from "react";
import ReactDOM from "react-dom/server";
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";

import Routes from "../routes";

export default (req, store) => {
  const content = ReactDOM.renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.url}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  return `
  <html>
    <head><link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" rel="stylesheet"></link></head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
};
