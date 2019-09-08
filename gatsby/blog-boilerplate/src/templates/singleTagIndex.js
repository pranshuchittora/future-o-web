import React from "react";
import { graphql, Link } from "gatsby";

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext;
  return (
    <div>
      <div>Posts about {`${tagName}`}</div>
      <div>
        <ul>{/* Post Map */}</ul>
      </div>
    </div>
  );
};

export default SingleTagTemplate;
