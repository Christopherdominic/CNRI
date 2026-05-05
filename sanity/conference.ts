import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'conference',
  title: 'Conference',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'objectives',
      title: 'Objectives',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'subThemes',
      title: 'Sub-Themes',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'targetParticipants',
      title: 'Target Participants',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'activities',
      title: 'Conference Activities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Activity Title'},
            {name: 'icon', type: 'string', title: 'Icon Name'},
          ],
        },
      ],
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
    }),
    defineField({
      name: 'isActive',
      title: 'Active Conference',
      type: 'boolean',
      description: 'Only one conference should be active at a time',
      initialValue: true,
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'theme',
      media: 'bannerImage',
    },
  },
})
