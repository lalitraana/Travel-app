import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { icons } from "./assets/icons/index";

library.add(fab, icons);

ReactDOM.render(<App />, document.getElementById("root"));
