import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../layout/layout';

interface Article {
  id: string;
  title: string;
  html: string;
  created_by?: {
    first_name: string;
    last_name: string;
  };
  feature_image?: {
    data: {
      full_url: string;
    };
  };
}

interface ArticleTemplateProps {
  data: {
    directusArticle: Article;
  };
}

function ArticleTemplate({ data }: ArticleTemplateProps) {
  const title = data?.directusArticle?.title;
  const firstName = data?.directusArticle?.created_by?.first_name;
  const lastName = data?.directusArticle?.created_by?.last_name;
  const featureImage = data?.directusArticle?.feature_image?.data?.full_url;
  const html = data?.directusArticle?.html;
  return (
    <Layout>
      <h1>{title}</h1>
      <p>
        by {firstName ?? ''} {lastName ?? ''}
      </p>
      {featureImage && <img src={featureImage} alt="" />}
      {html && (
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        ></div>
      )}
    </Layout>
  );
}

export default ArticleTemplate;

export const query = graphql`
  query ArticleTemplate($slug: String!) {
    directusArticle(slug: { eq: $slug }) {
      id
      html
      created_by {
        first_name
        last_name
      }
      feature_image {
        data {
          full_url
        }
      }
      title
    }
  }
`;
