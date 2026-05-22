'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/index'

export default defineConfig({
  name: 'default',
  title: 'CNRI Website',
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website Sections')
          .items([
            S.listItem()
              .title('About')
              .child(
                S.list()
                  .title('About')
                  .items([
                    S.listItem()
                      .title('About Page')
                      .child(
                        S.document()
                          .schemaType('about')
                          .documentId('about')
                          .title('About Page')
                      ),
                    S.listItem()
                      .title('Site Settings')
                      .child(
                        S.document()
                          .schemaType('siteSettings')
                          .documentId('siteSettings')
                          .title('Site Settings')
                      ),
                  ])
              ),

            S.listItem()
              .title('Focus Areas')
              .child(
                S.documentTypeList('focusArea').title('Focus Areas')
              ),

            S.listItem()
              .title('Courses')
              .child(
                S.documentTypeList('course').title('Courses & Diplomas')
              ),

            S.listItem()
              .title('Activities & Conference')
              .child(
                S.list()
                  .title('Activities & Conference')
                  .items([
                    S.listItem()
                      .title('Activities')
                      .child(
                        S.documentTypeList('activity').title('Activities')
                      ),
                    S.listItem()
                      .title('Conference')
                      .child(
                        S.documentTypeList('conference').title('Conference')
                      ),
                  ])
              ),

            S.listItem()
              .title('Team & Partners')
              .child(
                S.list()
                  .title('Team & Partners')
                  .items([
                    S.listItem()
                      .title('Team Members')
                      .child(
                        S.documentTypeList('teamMember').title('Team Members')
                      ),
                    S.listItem()
                      .title('Partners')
                      .child(
                        S.documentTypeList('partner').title('Partners')
                      ),
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
