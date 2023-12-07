import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";
import { logIn } from "./redux/slices/auth.slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logIn({}));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
