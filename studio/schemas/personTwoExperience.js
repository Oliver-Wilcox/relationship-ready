export default {
    name: 'personTwo',
    title: 'Person Two Experience',
    type: 'document',
    fields: [
      {
        name: 'Name',
        title: 'Name',
        type: 'string',

      },
      {
      name: "personTwoTitle",
      title: "Title",
      type: "string",
      description: 'Title For Person Two Section',
      options: {
        maxLength: 100,
      },
    },
    {
        name: 'personTwoImage',
        title: 'Person Two Image',
        description: 'Image 1 out of 1',
        type: 'image',
      },
    {
        name: "personTwoParagraphTextOne",
        title: "Paragraph 1",
        type: "string",
        description: 'Paragraph 1 Out Of 3',
        options: {
          maxLength: 100,
        },
      },
    
      {
        name: "personTwoParagraphTextTwo",
        title: "Paragraph 2",
        type: "string",
        description: 'Paragraph 2 Out Of 3',
        options: {
          maxLength: 100,
        },
      },
      {
        name: "personTwoParagraphTextThree",
        title: "Paragraph 2",
        type: "string",
        description: 'Paragraph 3 Out Of 3',
        options: {
          maxLength: 100,
        },
      },
      {
        name: "personOneName",
        title: "Person 1 Name",
        type: "string",
        description: 'Person One Name',
        options: {
          maxLength: 100,
        },
      },
      {
        name: 'personOneImage',
        title: 'Person One Image',
        description: 'Image 2 out of 3',
        type: 'image',
      },
      {
        name: "personThreeName",
        title: "Person 3 Name",
        type: "string",
        description: 'Person Three Name',
        options: {
          maxLength: 100,
        },
      },
      {
        name: 'personThreeImage',
        title: 'Person Three Image',
        description: 'Image 3 out of 3',
        type: 'image',
      },
      
]
}