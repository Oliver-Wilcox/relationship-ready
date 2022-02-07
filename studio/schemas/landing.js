export default {
  name: 'landing',
  title: ' Page',
  type: 'document',
  fields: [
    {
      name: 'Name',
      title: 'Name',
      type: 'string',
      description: 'The title for the front page'
    },
    {
    name: "titleOne",
    title: "Title One",
    type: "string",
    description: 'One Out Of Three',
    options: {
      maxLength: 40,
    },
  },
    {
      name: "titleTwo",
      title: "Title Two",
      type: "string",
      description: 'Two Out Of Three',
      options: {
        maxLength: 40,
      },
  },
  {
    name: "titleThree",
    title: "Title Three",
    type: "string",
    description: 'Three Out Of Three',
    options: {
      maxLength: 40,
    }
  },
    {
      name: 'frontParagraphOne',
      title: 'Front Paragraph One',
      description: 'Front Paragraph 1 out of 3',
      type: 'string',
      options: {
        maxLength: 200
      }
    },
    {
      name: 'frontParagraphTwo',
      title: 'Front Paragraph Two',
      description: 'Front Paragraph 2 out of 3',
      type: 'string',
      options: {
        maxLength: 400
      }
    },
   
    {
      name: 'frontParagraphThree',
      title: 'Front Paragraph Three',
      description: 'Front Paragraph 3 out of 3',
      type: 'string',
      options: {
        maxLength: 400
      }
    },

]
}
  
  