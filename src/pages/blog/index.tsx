import { graphql, HeadFC, Link, PageProps } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { PageLayout } from '../../components/page-layout';
import { CustomHead } from '../../components/custom-head';

const BlogPage: React.FC<PageProps<Queries.BlogPageQuery>> = ({ data }) => {
  const headerImage = data.headerImage
    ? getImage(data.headerImage.childImageSharp)
    : null;
  return (
    <PageLayout image={headerImage} title="Blog Page">
      <h1 className="mb-8 text-center text-4xl font-bold sm:text-5xl">Blog</h1>
      <ul className="mx-auto max-w-3xl p-4 sm:p-0">
        {data.allMdx.edges.map(({ node }) => (
          <li key={node.id} className="mb-4 h-72 last-of-type:mb-0">
          <Link
            to={`/blog/${node.frontmatter?.slug}`}
            className="flex items-center overflow-hidden rounded-lg border border-gray-400"
          >
            <div className="flex-1 md:h-72 md:w-64">
              {node.frontmatter?.hero_image && (
                <GatsbyImage
                  image={
                    getImage(node.frontmatter.hero_image.childImageSharp)!
                  }
                  alt=""
                  className="h-full w-full"
                />
              )}
            </div>
            <div className="flex-1 p-6">
              <h2 className="mb-4 text-xl font-bold">
                {node.frontmatter?.title}
              </h2>
              <span className="mb-2 block text-sm font-thin">
                By {node.frontmatter?.author} on {node.frontmatter?.date}
              </span>
              <span className="block text-lg">{node.excerpt}</span>
            </div>
          </Link>
        </li>
        ))}
      </ul>
    </PageLayout>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogPage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
            slug
            hero_image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
    headerImage: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export const Head: HeadFC = () => (<CustomHead
  title="Home | My Gatsby Blog"
  description="This is the home page to my blog. You should write a better description."
/>);