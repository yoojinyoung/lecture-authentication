import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Page from "../../components/Page";
import { logIn } from "../../redux/slices/auth.slice";

function LoginPage() {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(logIn({ id, pw }));
  };

  return (
    <Page title="로그인">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="id를 입력해 주세요"
          value={id}
          onChange={(e) => setId(e.currentTarget.value)}
        />
        <input
          placeholder="pw를 입력해 주세요"
          value={pw}
          onChange={(e) => setPw(e.currentTarget.value)}
          type="password"
        />
        <button type="submit">로그인하기</button>
      </form>
    </Page>
  );
}

export default LoginPage;
