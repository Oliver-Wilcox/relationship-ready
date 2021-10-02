export default {
    name: 'pathParagraph',
    title: 'Path Section Paragraph',
    type: 'document',
    fields: [
      {
        name: 'Name',
        title: 'Name',
        type: 'string',
        description: 'The paragraph for the path section'
      },
      {
      name: "pathParagraphOne",
      title: "Paragraph One",
      type: "string",
      description: '1 Out Of 2',
      options: {
        maxLength: 200,
      },
    },
    {
        name: "pathParagraphTwo",
        title: "Paragraph Two",
        type: "string",
        description: '2 Out Of 2',
        options: {
          maxLength: 200,
        },
      },
]
}