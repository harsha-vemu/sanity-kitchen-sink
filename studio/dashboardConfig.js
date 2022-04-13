export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '6256a31937f101744dc7a1bb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8rp9mh4x',
                  apiId: '9bbe2351-7bdc-4b2b-a2d7-b6ef9158749b'
                },
                {
                  buildHookId: '6256a3194ad85a76ebecd1c0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-96dmkdst',
                  apiId: '712d6cb7-fa63-4924-b15f-71081b7e1563'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/harsha-vemu/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-96dmkdst.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
