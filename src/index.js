import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

const theme = createMuiTheme();

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>{app}</ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
