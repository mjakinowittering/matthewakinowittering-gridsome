// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Matthew Akino-Wittering',
  siteUrl: 'https://matthew.akinowittering.com',
  icon: './src/assets/img/icons/dot.svg',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Company',
        path: './content/companies/*.yml'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Role',
        path: './content/companies/roles/*/*.md',
        refs: {
          company: 'Company'
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'University',
        path: './content/universities/*.yml'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Course',
        path: './content/universities/courses/*.md',
        refs: {
          university: 'University'
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Bookmark',
        path: './content/bookmarks/*/*.yml',
        refs: {
          publishedMonth: {
            typeName: 'BookmarkPublished',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'ExternalLink',
        path: './content/external-links/*.yml'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Milestone',
        path: './content/milestones/*/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/posts/*.md',
        remark: {
          plugins: [
            [
              '@noxify/gridsome-plugin-remark-embed', {
                'enabledProviders': [
                  'Twitter'
                ],
                'Twitter': {
                    align: 'center',
                    hideConversation: true
                }
              }
            ]
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Skill',
        path: './content/skills/*.md'
      }
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        host: 'https://matthew.akinowittering.com',
        sitemap: 'https://matthew.akinowittering.com/sitemap.xml',
        policy: [
          {
            userAgent: "*",
            allow: [
              "/"
            ],
            disallow: [],
            crawlDelay: 10,
          }
        ]
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/': {
            changefreq: 'monthly',
            priority: 0.5
          },
          '/blog/': {
            changefreq: 'monthly',
            priority: 0.5
          },
          '/blog/**': {
            changefreq: 'monthly',
            priority: 0.5
          },
          '/resume/': {
            changefreq: 'monthly',
            priority: 0.5
          }
        },
        exclude: []
      }
    }
  ],
  templates: {
    Post: '/blog/:title/',
  }
}
