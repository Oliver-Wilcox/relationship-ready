export default {
    name: 'programmesContent',
    title: 'Programmes Page Content',
    type: 'document',
    fields: [
      {
        name: 'programmesPageContent',
        title: 'Programmes Page Content',
        type: 'string',
        description: 'Content For The Landing Section Of The Programmes Page'
      },
      {
      name: "programmesTitleOne",
      title: "Programmes Title One",
      type: "string",
      description: 'Title For The Programmes Section (1 Out Of 2)',
      options: {
        maxLength: 40,
      },
    },
    {
        name: "programmesTitleTwo",
        title: "Programmes Title Two",
        type: "string",
        description: 'Title For The Programmes Section (2 Out Of 2)',
        options: {
          maxLength: 40,
        },
      },
]
}