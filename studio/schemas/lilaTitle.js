export default {
    name: 'lilaTitle',
    title: 'Lila Section Title',
    type: 'document',
    fields: [
      {
        name: 'Name',
        title: 'Name',
        type: 'string',
        description: 'The paragraph for the path section'
      },
      {
      name: "lilaTitleText",
      title: "Title",
      type: "string",
      description: 'Title For Lila Section',
      options: {
        maxLength: 100,
      },
    },
    {
        name: "lilaParagraphTextOne",
        title: "Paragraph 1",
        type: "string",
        description: 'Paragraph 1 Out Of 2',
        options: {
          maxLength: 100,
        },
      },
      {
        name: "lilaParagraphTextTwo",
        title: "Paragraph 2",
        type: "string",
        description: 'Paragraph 2 Out Of 2',
        options: {
          maxLength: 100,
        },
      }
]
}