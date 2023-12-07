import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../../components/Form/Form";
import Page from "../../components/Page";
import { signUp } from "../../redux/slices/auth.slice";

function SignUpPage() {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !pw || !nickname) return alert("모든 값을 제대로 입력해 주세요");

    dispatch(signUp({ id, pw, nickname }));
  };

  return (
    <Page title="회원가입">
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="id를 입력해 주세요"
          value={id}
          onChange={(e) => setId(e.currentTarget.value)}
        />
        <input
          placeholder="nickname를 입력해 주세요"
          value={nickname}
          onChange={(e) => setNickname(e.currentTarget.value)}
        />
        <input
          placeholder="pw를 입력해 주세요"
          type="password"
          value={pw}
          onChange={(e) => setPw(e.currentTarget.value)}
        />
        <button type="submit">회원가입하기</button>
      </Form>
    </Page>
  );
}

export default SignUpPage;
