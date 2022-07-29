import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <Provider store={Store}>
        <App />
      </Provider>
    </SnackbarProvider>
  </React.StrictMode>
);
