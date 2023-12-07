import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import dataAPI from "../../api/data.api";
import Page from "../../components/Page";
import { authActions } from "../../redux/slices/auth.slice";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dataAPI
      .getPosts()
      .then((res) => setPosts(res.data))
      .catch((e) => {
        console.log(e.config.signal.reason);
        dispatch(authActions.logOut());
      });
  }, []);

  return (
    <Page title="홈">
      <h2>포스트 목록</h2>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={"/"}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </Page>
  );
}

export default HomePage;
