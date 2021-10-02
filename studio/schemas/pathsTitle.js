export default {
    name: 'pathsTitle',
    title: 'Path Title',
    type: 'document',
    fields: [
      {
        name: 'Name',
        title: 'Name',
        type: 'string',
        description: 'The title for the path section'
      },
      {
      name: "pathTitle",
      title: "Title",
      type: "string",
      description: 'Path Title',
      options: {
        maxLength: 40,
      },
  }
  ]
      }