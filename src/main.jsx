import ReactDOM from "react-dom/client";
import App from "./App"
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App></App>
  </Provider>
);