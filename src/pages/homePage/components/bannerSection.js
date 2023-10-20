import React from "react";
import bannerImg from "../../../images/home/banner/banner_image.webp";
import bannerAuthorImg from "../../../images/home/banner/author_image.webp";

const BannerSection = () => {
  return (
    <>
      <section>
        <div className="page_width">
          <div className="banner_inner">
            <div className="banner_img">
              <img src={bannerImg} alt="" />
            </div>
            <div className="banner_post">
              <button>Technology</button>
              <h2>
                The Impact of Technology on the Workplace: How Technology is
                Changing.
              </h2>
              <div className="post_detail">
                <div className="banner_post_img">
                  <img src={bannerAuthorImg} alt="" />
                </div>
                <p>August 20, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSection;
