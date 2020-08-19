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
                  buildHookId: '5f3dabb261cfec0097569d9e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-tdtk3i1d',
                  apiId: '7e737632-fca9-4f53-85d3-a0005f481250'
                },
                {
                  buildHookId: '5f3dabb243995800b5680dc7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sbpdney9',
                  apiId: '814a9a00-7b9c-43b7-b112-1ebfa3eae42f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshuarule/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sbpdney9.netlify.app', category: 'apps'}
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
