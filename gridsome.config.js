// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Ahmad Husen',
  siteDescription: 'My personal site, portfolio, and blog',
  siteUrl: 'https://husen.id',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
      },
    },
    // Netlify CMS Plugin
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        modulePath: `src/cms/index.js`,
        configPath: `src/cms/config.yml`,
        publicPath: `/cms`,
        htmlTitle: `Content Manager`,
      },
    },
    // Load all Blog Posts from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/posts/**/*.md',
        typeName: 'BlogPost',
        refs: {
          tag: 'BlogTag',
          author: 'BlogAuthor',
        },
      },
    },
    // Load Tags from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/tags/**/*.md',
        typeName: 'BlogTag',
        refs: {
          posts: {
            typeName: 'BlogPost',
          },
        },
      },
    },
    // Load Authors from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/authors/**/*.md',
        typeName: 'BlogAuthor',
        refs: {
          posts: {
            typeName: 'BlogPost',
          },
        },
      },
    },
    // Load all Portfolio Works from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/portfolio/works/**/*.md',
        typeName: 'PortfolioWork',
        refs: {
          tag: 'PortfolioTag',
        },
      },
    },
    // Load Tags from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/portfolio/tags/**/*.md',
        typeName: 'PortfolioTag',
        refs: {
          posts: {
            typeName: 'PortfolioWork',
          },
        },
      },
    },
    // Save gravatar
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        original: true,
        cache: false,
        typeName: 'Gravatar',
        sourceField: 'thumbnailUrl',
        targetField: 'avatar',
        targetPath: './src/assets/img',
      },
    },
    // Create sitemap
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2020-08-26',
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2020-08-26',
          },
          '/work': {
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2020-08-26',
          },
        },
      },
    },
    // Create RSS feed
    {
      use: '@microflash/gridsome-plugin-feed',
      options: {
        contentTypes: ['BlogPost'],
        feedOptions: {
          title: 'Husen blog',
          description: 'My personal blog about coding and other stuff',
        },
        rss: {
          enabled: true,
          output: '/feed.xml',
        },
        maxItems: 25,
        htmlFields: ['content'],
        enforceTrailingSlashes: false,
        nodeToFeedItem: (node) => ({
          title: node.title,
          link: `https://husen.id${node.path}`,
          date: node.date,
          description: node.excerpt,
          content: node.content,
          image: `https://husen.id/${node.featuredImage}`,
          author: [
            {
              name: node.author.title,
              email: node.author.email,
              link: node.author.link,
            },
          ],
        }),
      },
    },
  ],
  templates: {
    BlogPost: [
      {
        path: '/blog/:year/:month/:day/:title',
        component: './src/templates/Blog/SinglePost.vue',
      },
    ],
    BlogTag: [
      {
        path: '/blog/tag/:title',
        component: './src/templates/Blog/Tag.vue',
      },
    ],
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ],
    },
  },
  configureWebpack: {
    // merged with the internal config
  },
}
