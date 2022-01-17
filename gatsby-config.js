/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // url: `http://localhost:8888/wordpress1/graphql`,
        // url: `https://wpgatsbydemo.wpengine.com/graphql`,
        // url: `http://wphowkhow.byethost5.com/graphql`,
        // url: `http://wordpresstesting.x10.mx/wp/graphql`,
        url: `http://35.198.237.77/graphql`,
        // develop: {
        //   hardCacheMediaFiles: true,
        // },
        useACF: true,
        // hostingWPCOM: true,
        // develop: {
        //   //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
        //   hardCacheMediaFiles: true,
        // },
        // schema: {
        //   //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
        //   typePrefix: `Wp`,
        // },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        collectionTypes: [
          { name: `api/abouts`, endpoint: `api/abouts?populate=*` },
          { name: `api/projects`, endpoint: `api/projects?populate=*` },
          { name: `api/clients`, endpoint: `api/clients?populate=*` },
          { name: `api/teams`, endpoint: `api/teams?populate=detail.image` },
        ],
      },
    },
  ],
}
