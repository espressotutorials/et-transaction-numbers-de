module.exports = {
  siteMetadata: {
    siteUrl: "https://fehlernummern.espresso-tutorials.de/",
    title: "SAP Transaktionen im Überblick - Espresso Tutorials GmbH",
    description: "Unsere SAP Transaktionen Liste ist Ihre Anlaufstelle bei Verständnisproblemen in der SAP-Welt. Wir erklären Ihnen die unterschiedlichen Transaktionen und Begrifflichkeiten.",
    twitterUsername: "@info_tutorials",
    image: `/images/espresso-tutorials-social.jpg`,
    keywords: 'SAP, ABAP, Tabellen, Transaktionen, Transaction, ERP, HowTo',
    og: {
      siteName: 'SAP Transaktionen im Überblick - Espresso Tutorials GmbH',
      twitterCreator: '@info_tutorials',
      twitterCard: 'summary_large_image'
    },
  },
  plugins: [
  "gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-postcss",
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  // `gatsby-transformer-sharp`,
  `gatsby-transformer-remark`,
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/favicon/icon.png',
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog-posts`,
      path: `${__dirname}/src/blog-posts/blog-posts/`,
    },
  },
  ],
};
