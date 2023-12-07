import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Page from "../../components/Page";

function SignUpPage() {
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("id", id);
    console.log("pw", pw);
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
