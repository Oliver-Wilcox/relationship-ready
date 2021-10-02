export default {
    name: 'retreatPage',
    title: 'Retreat Page Content',
    type: 'document',
    fields: [
      {
        name: 'retreatPageContent',
        title: 'Retreat Page Content',
        type: 'string',
        description: 'Content For The Repeat Section Of The Programmes Page'
      },
      {
      name: "retreatTitle",
      title: "Retreat Title",
      type: "string",
      description: 'Title For The Retreat Section',
      options: {
        maxLength: 40,
      },
    },
]
}