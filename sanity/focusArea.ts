import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'focusArea',
  title: 'Focus Area',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., Microscope, Sprout, BookOpen)',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          {title: 'Blue', value: 'bg-blue-500'},
          {title: 'Green', value: 'bg-primary-500'},
          {title: 'Orange', value: 'bg-accent-500'},
          {title: 'Purple', value: 'bg-purple-500'},
          {title: 'Pink', value: 'bg-pink-500'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'points',
      title: 'Key Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
