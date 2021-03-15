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
                  buildHookId: '604ed398b505177c9c5b3cab',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gv9kpomb',
                  apiId: '2b25e715-2ef6-45a2-92c7-4edb88c5d583'
                },
                {
                  buildHookId: '604ed3998d3ab16484d39133',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6e5xaw29',
                  apiId: '18f1f57d-729e-4f52-bc88-2c4acdd8c5d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Vitaminfish45/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6e5xaw29.netlify.app', category: 'apps'}
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
