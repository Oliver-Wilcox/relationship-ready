export default {
    name: 'inTouchText',
    title: 'Get In Touch Text',
    type: 'document',
    fields: [
      {
        name: 'Name',
        title: 'Name',
        type: 'string',
       
      },
      {
      name: "inTouchTitle",
      title: "Title",
      type: "string",
      description: 'Get In Touch Title',
      options: {
        maxLength: 100,
      },
    },
    {
        name: "inTouchParagraph",
        title: "Paragraph",
        type: "string",
        description: 'Get In Touch Paragraph',
        options: {
          maxLength: 200,
        },
      },
    ]
}