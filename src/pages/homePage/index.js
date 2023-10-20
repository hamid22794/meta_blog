import React from "react";
import Layout from "../../layout";
import "./style.css";
import BannerSection from "./components/bannerSection";
import AdvertisementCard from "../../components/advertisementCard";
import LatestPosts from "./components/latestPosts";

const HomePage = () => {
  return (
    <Layout>
      <BannerSection />
      <AdvertisementCard />
      <LatestPosts />
      <AdvertisementCard />
    </Layout>
  );
};

export default HomePage;
