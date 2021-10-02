export default {
    name: 'coachingContent',
    title: 'Coaching Page Content',
    type: 'document',
    fields: [
      {
        name: 'coachingPageContent',
        title: 'Coaching Page Content',
        type: 'string',
        description: 'Content For The Coaching Section Of The Programmes Page'
      },
      {
      name: "coachingTitleOne",
      title: "Coaching Title One",
      type: "string",
      description: 'Title For The Coaching Section',
      options: {
        maxLength: 40,
      },
    },
    {
        name: "coachingParagraph",
        title: "Coaching Paragraph",
        type: "string",
        description: 'Paragraph For The Coaching Section',
        options: {
          maxLength: 40,
        },
      },
]
}