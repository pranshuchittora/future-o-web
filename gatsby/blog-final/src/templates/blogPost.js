import React from "react";
import { graphql, Link } from "gatsby";

import Header from "../components/Header";
import PageLayout from "../components/PageLayout";

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext;

  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  return (
    <React.Fragment>
      <Header />
      <PageLayout>
        <h1 className="blog-title">{title}</h1>
        <div
          className="blogpost"
          dangerouslySetInnerHTML={{ __html: html }}
          style={{
            fontFamily: "avenir"
          }}
        />

        <div style={{ marginBottom: "1rem", fontFamily: "avenir" }}>
          {next && (
            <Link to={next.frontmatter.path}>
              Next: {`${next.frontmatter.title}`}
            </Link>
          )}
        </div>
        <div style={{ fontFamily: "avenir" }}>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Prev: {`${prev.frontmatter.title}`}
            </Link>
          )}
        </div>
      </PageLayout>
    </React.Fragment>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
