import React, { useEffect, useState } from "react";
import dataAPI from "../../api/data.api";
import Page from "../../components/Page";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dataAPI
      .getPosts()
      .then((res) => setPosts(res.data))
      .catch((e) => {
        console.log(e.config.signal.reason);
      });
  }, []);

  return <Page title="홈"></Page>;
}

export default HomePage;
