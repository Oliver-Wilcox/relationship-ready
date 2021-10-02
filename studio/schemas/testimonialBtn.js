export default {
    name: 'testimonialBtn',
    title: 'Testimonial Button Name',
    type: 'document',
    fields: [
        {
            name: 'Name',
            title: 'Name',
            type: 'string',
            description: 'The title for the front page'
          },
      {
        name: 'testimonialBtnOne',
        title: 'Testimonial Button Name One',
        description: 'Name 1 Out Of 3',
        type: 'string',
        options: {
          maxLength: 20
        }
    },
    {
        name: 'testimonialBtnTwo',
        title: 'Testimonial Button Name One',
        description: 'Name 2 Out Of 3',
        type: 'string',
        options: {
          maxLength: 20
        }
    },
    {
        name: 'testimonialBtnThree',
        title: 'Testimonial Button Name One',
        description: 'Name 3 Out Of 3',
        type: 'string',
        options: {
          maxLength: 20
        }
    }
    ]
}