import React from "react";
import BlogPost from "../../../components/blogPost";
import latestPost1 from "../../../images/home/latest_posts/lp_1.png";
import latestPost2 from "../../../images/home/latest_posts/lp_2.png";
import latestPost3 from "../../../images/home/latest_posts/lp_3.png";
import latestPost4 from "../../../images/home/latest_posts/lp_4.png";
import latestPost5 from "../../../images/home/latest_posts/lp_5.png";
import latestPost6 from "../../../images/home/latest_posts/lp_6.png";
import latestPost7 from "../../../images/home/latest_posts/lp_7.png";
import latestPost8 from "../../../images/home/latest_posts/lp_8.png";
import latestPost9 from "../../../images/home/latest_posts/lp_9.png";
import authPost1 from "../../../images/home/latest_posts/lp_author1.png";
import authPost2 from "../../../images/home/latest_posts/lp_author2.png";
import authPost3 from "../../../images/home/latest_posts/lp_author3.png";
import authPost4 from "../../../images/home/latest_posts/lp_author4.png";
import authPost5 from "../../../images/home/latest_posts/lp_author5.png";
import authPost6 from "../../../images/home/latest_posts/lp_author1.png";
import authPost7 from "../../../images/home/latest_posts/lp_author2.png";
import authPost8 from "../../../images/home/latest_posts/lp_author3.png";
import authPost9 from "../../../images/home/latest_posts/lp_author4.png";

const LatestPosts = () => {
  return (
    <>
      <section className="section_margin">
        <div className="page_width">
          <div className="latest_posts_inner">
            <div className="latest_posts_inner_heading">
              <h2> Latest Posts</h2>
            </div>
            <div className="latest_posts_inner_body_grid">
              <BlogPost postImg={latestPost1} postAuth={authPost1} />
              <BlogPost postImg={latestPost2} postAuth={authPost2} />
              <BlogPost postImg={latestPost3} postAuth={authPost3} />
              <BlogPost postImg={latestPost4} postAuth={authPost4} />
              <BlogPost postImg={latestPost5} postAuth={authPost5} />
              <BlogPost postImg={latestPost6} postAuth={authPost6} />
              <BlogPost postImg={latestPost7} postAuth={authPost7} />
              <BlogPost postImg={latestPost8} postAuth={authPost8} />
              <BlogPost postImg={latestPost9} postAuth={authPost9} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestPosts;
