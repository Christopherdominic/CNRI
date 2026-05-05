import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {name: 'facebook', type: 'url', title: 'Facebook'},
        {name: 'twitter', type: 'url', title: 'Twitter'},
        {name: 'linkedin', type: 'url', title: 'LinkedIn'},
        {name: 'instagram', type: 'url', title: 'Instagram'},
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})
