import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from './Components/Layout';

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Layout>
      <App />
    </Layout>
  </Provider>
);
