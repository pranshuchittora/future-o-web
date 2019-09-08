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
        {/* Page */}
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
