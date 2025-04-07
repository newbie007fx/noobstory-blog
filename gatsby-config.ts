import type { GatsbyConfig } from 'gatsby';
const adapter = require("gatsby-adapter-netlify").default;

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Noob Story`,
    siteUrl: `https://www.yourdomain.tld`,
    author: 'Novianto',
    description:
      'Follow my story building a stunning and performant blog with GatsbyJS! Get tips and insights on web development, design, and more.',
    image: 'featured.jpg',
    navigation: [
      {
        name: 'About',
        path: '/about',
      },
      {
        name: 'Blog',
        path: '/blog',
      },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-images',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://noobstory.my.id',
        sitemap: 'https://noobstory.my.id/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap', 
  ],
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
    imageCDN: false,
  }),
};

export default config;
