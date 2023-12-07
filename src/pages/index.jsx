import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import PrivateRoutesLayout from "../layouts/PrivateRoutesLayout/PrivateRoutesLayout";
import PublicRoutesLayout from "../layouts/PublicRoutesLayout/PublicRoutesLayout";
import HomePage from "./HomePage";
import LogInPage from "./LogInPage";
import SignUpPage from "./SignUpPage";

function Pages() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route element={<PublicRoutesLayout />}>
          <Route path="/log-in" element={<LogInPage />} exact />
          <Route path="/sign-up" element={<SignUpPage />} exact />
          <Route path="*" element={<Navigate to={"/log-in"} replace />} />
        </Route>
        <Route element={<PrivateRoutesLayout />}>
          <Route path="/" element={<HomePage />} exact />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Pages;
