import React from "react";

const BlogPost = ({ postImg, postAuth }) => {
  return (
    <div className="post_container">
      <div className="post_img">
        <img src={postImg} alt="" />
      </div>
      <button>Technology</button>
      <h3>
        The Impact of Technology on the Workplace: How Technology is Changing
      </h3>
      <div className="post_author_details">
        <div className="author_img">
          <img src={postAuth} alt="" />
        </div>
        <p>Tracey Wilson</p>
        <p>August 20, 2022</p>
      </div>
    </div>
  );
};

export default BlogPost;
