module.exports = {
  siteMetadata: {
    title: "Risen World",
    description: `Strategic narrative toy, mashing up some Roguelike, 4X and CRPG concepts`,
  },
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve(`${__dirname}/src/templates/Page.tsx`),
          posts: require.resolve(`${__dirname}/src/templates/Post.tsx`),
        },
        gatsbyRemarkPlugins: [{
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 800,
          }
        }],
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`
      },
    },
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
        ignore: [`.gitkeep`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
        ignore: [`.gitkeep`],
      },
    },
    "gatsby-transformer-sharp",
  ],
};
