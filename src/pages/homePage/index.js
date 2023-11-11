import React from "react";
import Layout from "../../layout";
import "./style.css";
import BannerSection from "./components/bannerSection";
import AdvertisementCard from "../../components/advertisementCard";
import LatestPosts from "./components/latestPosts";
import ViewPost from "./components/viewPost";

const HomePage = () => {
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
