export default {
    name: 'virtualParagraph',
    title: 'Virtual Retreat Section Content',
    type: 'document',
    fields: [
      {
        name: 'virtualParagraphContent',
        title: 'Virtual Retreat Section Content',
        type: 'string',
        description: 'Paragraph For The Virtual Retreat Section Of The Programmes Page'
      },
    {
      name: "virtualParagraphOne",
      title: "Virtual Paragraph",
      type: "string",
      description: 'Paragraph One For The Virtual Retreat Section',
      options: {
        maxLength: 100,
      },
    },
    {
        name: "virtualParagraphTwo",
        title: "Virtual Paragraph",
        type: "string",
        description: 'Paragraph Two For The Virtual Retreat Section',
        options: {
          maxLength: 100,
        },
      },
      {
        name: "virtualParagraphThree",
        title: "Virtual Paragraph",
        type: "string",
        description: 'Paragraph Three For The Virtual Retreat Section',
        options: {
          maxLength: 100,
        },
      },
]
}