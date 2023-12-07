import React, { useState } from "react";

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
    <div>
      <h1>회원가입 페이지</h1>
      <form onSubmit={handleSubmit}>
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
          value={pw}
          onChange={(e) => setPw(e.currentTarget.value)}
        />
        <button type="submit">회원가입하기</button>
      </form>
    </div>
  );
}

export default SignUpPage;
