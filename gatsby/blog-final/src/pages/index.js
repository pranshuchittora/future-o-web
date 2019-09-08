import React from "react";
import { graphql, Link } from "gatsby";
import Header from "../components/Header";
import PageLayout from "../components/PageLayout";

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Header />
      <PageLayout>
        {edges.map(edge => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path} style={{ marginBottom: "1rem" }}>
              <Link to={frontmatter.path}>
                <span className="home-blog-list">{frontmatter.title}</span>
              </Link>
            </div>
          );
        })}

        <div>
          <Link to="/tags">Browse by Tag</Link>
        </div>
      </PageLayout>
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
