export default {
  name: 'post',
  title: 'Front Page Title',
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
    },
},
]
}
  
  