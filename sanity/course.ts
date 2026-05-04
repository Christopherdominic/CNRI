import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Course / Diploma Programme',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Programme Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'acronym',
      title: 'Acronym',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'rationale',
      title: 'Rationale',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'aim',
      title: 'Aim',
      type: 'text',
    }),
    defineField({
      name: 'objectives',
      title: 'Objectives',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'targetBeneficiaries',
      title: 'Target Beneficiaries',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'totalCredits',
      title: 'Total Credit Units',
      type: 'number',
    }),
    defineField({
      name: 'admissionRequirements',
      title: 'Admission Requirements',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'curriculum',
      title: 'Curriculum',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'semester',
          title: 'Semester',
          fields: [
            {name: 'year', type: 'number', title: 'Year'},
            {name: 'semester', type: 'number', title: 'Semester Number'},
            {name: 'label', type: 'string', title: 'Label (e.g. Year One - First Semester)'},
            {
              name: 'courses',
              type: 'array',
              title: 'Courses',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'code', type: 'string', title: 'Course Code'},
                    {name: 'title', type: 'string', title: 'Course Title'},
                    {name: 'credits', type: 'number', title: 'Credit Units'},
                    {name: 'description', type: 'text', title: 'Description'},
                  ],
                  preview: {
                    select: {title: 'code', subtitle: 'title'},
                  },
                },
              ],
            },
            {name: 'totalCredits', type: 'number', title: 'Semester Total Credits'},
          ],
          preview: {
            select: {title: 'label'},
          },
        },
      ],
    }),
    defineField({
      name: 'assessmentStructure',
      title: 'Assessment Structure',
      type: 'object',
      fields: [
        {name: 'continuousAssessment', type: 'number', title: 'Continuous Assessment (%)'},
        {name: 'examination', type: 'number', title: 'End-of-Semester Examination (%)'},
        {name: 'minimumPass', type: 'number', title: 'Minimum Pass Mark (%)'},
      ],
    }),
    defineField({
      name: 'graduationRequirements',
      title: 'Graduation Requirements',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'diplomaClassification',
      title: 'Diploma Classification',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'cgpaRange', type: 'string', title: 'CGPA Range'},
            {name: 'classification', type: 'string', title: 'Class of Diploma'},
          ],
          preview: {
            select: {title: 'classification', subtitle: 'cgpaRange'},
          },
        },
      ],
    }),
    defineField({
      name: 'careerProspects',
      title: 'Career Prospects',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'directEntryEligibility',
      title: 'Direct Entry Eligibility',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'isActive',
      title: 'Active Programme',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'acronym'},
  },
})
