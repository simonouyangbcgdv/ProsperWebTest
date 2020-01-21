import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../layout/layout';
import SEO from '../components/seo';

const BlogIndex = ({ data }: any) => {
  const directusArticles = data.allDirectusArticle.edges;

  return (
    <Layout>
      <SEO title="All posts" />

      {directusArticles.map(({ node }: any) => {
        return (
          <article key={node.directusId} style={{ marginBottom: '25px' }}>
            {node.feature_image ? <img src={node.feature_image.data.full_url} alt="" /> : null}
            <header>
              <h3 style={{ margin: 0 }}>
                <Link to={`/${node.slug}`}>{node.title}</Link>
              </h3>
              <p>
                By: {node.created_by.first_name} {node.created_by.last_name}
              </p>
            </header>
          </article>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allDirectusArticle {
      totalCount
      edges {
        node {
          id
          slug
          html
          directusId
          title
          status
          feature_image {
            location
            id
            data {
              full_url
            }
          }
          created_by {
            first_name
            last_name
          }
        }
      }
    }
  }
`;
