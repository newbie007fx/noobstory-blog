import { MDXProvider } from '@mdx-js/react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { PageLayout } from '../../components/page-layout';
import { components, MainContent } from '../../components/mdx-components';
import { CustomHead } from '../../components/custom-head';

const BlogPost: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  children, // ← This is the post content
}) => {
  const featuredImage = data.mdx?.frontmatter?.hero_image
    ? getImage(data.mdx.frontmatter.hero_image.childImageSharp)
    : null;
  return (
    <PageLayout
      image={featuredImage}
      title={data.mdx?.frontmatter?.title ?? undefined}
    >
      <MainContent>
      <div className="mb-8">
        <span className="text-sm font-thin">
          By {data.mdx?.frontmatter?.author} on {data.mdx?.frontmatter?.date}
        </span>
      </div>
      <MDXProvider components={components}>{children}</MDXProvider>
      </MainContent>
    </PageLayout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      excerpt(pruneLength: 159)
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export const Head: HeadFC<Queries.BlogPostQuery, unknown> = ({ data }) => {
  const imageUrl =
    data.mdx?.frontmatter?.hero_image?.childImageSharp?.gatsbyImageData
      .images.fallback?.src;

  return (
    <CustomHead
      title={data.mdx?.frontmatter?.title || ''}
      description={data.mdx?.excerpt || ''}
      image={imageUrl}
      article
    />
  );
};