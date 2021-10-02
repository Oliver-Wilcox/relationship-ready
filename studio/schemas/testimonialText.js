export default {
    name: 'testimonialText',
    title: 'Testimonial Text',
    type: 'document',
    fields: [
      {
        name: 'textOne',
        title: 'Testimonial Text One',
        description: 'Text one out of three',
        type: 'string',
        options: {
          maxLength: 200
        }
      },
      {
        name: 'textTwo',
        title: 'Testimonial Text Two',
        description: 'Text two out of three',
        type: 'string',
        options: {
          maxLength: 200
        }
      },
      {
        name: 'textThree',
        title: 'Testimonial Text Three',
        description: 'Text three out of three',
        type: 'string',
        options: {
          maxLength: 200
        }
      },
    ]
}