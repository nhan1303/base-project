import React from "react";
import ReactDOM from "react-dom";

import { Button } from "@health-app/react";

ReactDOM.render(
  <React.StrictMode>
    <Button label="Example Button" />
  </React.StrictMode>,
  document.querySelector("#root")
);
