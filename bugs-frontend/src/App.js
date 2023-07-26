import "./App.css";
import Bugs from "./components/Bugs";
import configureStore from "../src/store/configureStore";
import { Provider } from "react-redux";
import BugsList from "./components/BugsList";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <BugsList />
    </Provider>
  );
}

export default App;
