import React from "react";
import { graphql, Link } from "gatsby";
import Header from "../components/Header";
import PageLayout from "../components/PageLayout";

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Header />
      {/* Layout */}
      
    </div>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

export default Layout;
