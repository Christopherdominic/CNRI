import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
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
  ],
  preview: {
    prepare() {
      return {
        title: 'About CNRI',
      }
    },
  },
})
