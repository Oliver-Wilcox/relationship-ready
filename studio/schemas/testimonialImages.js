export default {
    name: 'testimonialImages',
    title: 'Testimonial Section',
    type: 'document',
    fields: [
      {
        name: 'Name',
        title: 'Name',
        type: 'string',
        description: 'The title for the front page'
      },
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
    },
      {
        name: 'imageOne',
        title: 'TestimonialImg',
        description: 'Image 1 out of 3',
        type: 'image',
      },

      {
        name: 'imageTwo',
        title: 'TestimonialImg',
        description: 'Image 2 out of 3',
        type: 'image',
      },

      {
        name: 'imageThree',
        title: 'TestimonialImg',
        description: 'Image 3 out of 3',
        type: 'image',
      },

     
    
  
    
    ]
    }
      