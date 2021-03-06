import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
//function generateCodeFromObject(obj) {
//return a code generated string
//}

//module.exports = generateCodeFromObject;

//ReactDOM.render(<App />, document.getElementById("root"));

/*ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);*/

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
