import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import PrivateRoutesLayout from "../layouts/PrivateRoutesLayout/PrivateRoutesLayout";
import PublicRoutesLayout from "../layouts/PublicRoutesLayout/PublicRoutesLayout";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

function Pages() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route element={<PublicRoutesLayout />}>
          <Route path="/log-in" element={<LoginPage />} exact />
          <Route path="/sign-up" element={<SignUpPage />} exact />
        </Route>
        <Route element={<PrivateRoutesLayout />}>
          <Route path="/" element={<HomePage />} exact />
        </Route>
      </Route>
    </Routes>
  );
}

export default Pages;
