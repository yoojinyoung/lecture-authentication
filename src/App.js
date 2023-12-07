import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
