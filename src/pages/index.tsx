import * as React from 'react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { PageLayout } from '../components/page-layout';
import { StaticImage } from 'gatsby-plugin-image';
import { CustomHead } from '../components/custom-head';

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const image = data.headerImage
    ? getImage(data.headerImage.childImageSharp)
    : null;
  return (
    <PageLayout image={image} title="My Gatsby Blog">
      <div className="container mx-auto px-4 lg:px-0">
        <h1 className="mb-8 text-4xl font-bold lg:text-5xl">My Gatsby Blog</h1>
        <span className="text-lg">This is my Gatsby Blog home page!</span>
      </div>
      <p>I'm making this by following Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/bismillah.jpg"
      />
    </PageLayout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
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
