import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import Home from "./pages/home";
import store from "./stores";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <Home />
    </Provider>
);
