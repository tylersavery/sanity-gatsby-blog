export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb1dddf1dbe838061634999',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-syot6b2n',
                  apiId: '9f7f4e9c-ce8b-4ea4-8fed-5a7bd64da8e0'
                },
                {
                  buildHookId: '5eb1dddfadbab80201e7ca9b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2wzd8va2',
                  apiId: '8657c045-834a-4a0d-a4b5-925f004f9c44'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tsavecodes/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2wzd8va2.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
