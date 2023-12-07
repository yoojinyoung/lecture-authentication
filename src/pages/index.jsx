import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

function Pages() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/login" element={<LoginPage />} exact />
        <Route path="/signup" element={<SignUpPage />} exact />
        <Route path="/" element={<HomePage />} exact />
      </Route>
    </Routes>
  );
}

export default Pages;
