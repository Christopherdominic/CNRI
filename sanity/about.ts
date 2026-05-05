import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'vision',
      title: 'Vision',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'commitment',
      title: 'Our Commitment',
      type: 'text',
    }),
    defineField({
      name: 'impactStats',
      title: 'Impact Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'value', type: 'string', title: 'Value', validation: (Rule) => Rule.required()},
            {name: 'label', type: 'string', title: 'Label', validation: (Rule) => Rule.required()},
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About CNRI',
      }
    },
  },
})
