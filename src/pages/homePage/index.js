import React, { useState, useEffect } from "react";
import Layout from "../../layout";
import "./style.css";
import axios from "axios";
import BannerSection from "./components/bannerSection";
import AdvertisementCard from "../../components/advertisementCard";
import LatestPosts from "./components/latestPosts";
import ViewPost from "./components/viewPost";

const HomePage = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setPosts(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  console.log("Post Data", posts);

  return (
    <Layout>
      <BannerSection />
      <AdvertisementCard />
      <LatestPosts />
      <ViewPost />
      <AdvertisementCard />
    </Layout>
  );
};

export default HomePage;
