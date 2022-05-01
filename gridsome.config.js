// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Matthew Akino-Wittering',
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
        path: './content/companies/roles/*.md',
        refs: {
          company: {
            typeName: 'Company',
            create: false
          }
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
          university: {
            typeName: 'University',
            create: false
          }
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
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/posts/*.md',
        refs: {
          published: {
            typeName: 'PostPublished',
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
    }
  ],
  templates: {
    Post: '/blog/:title',
  }
}
