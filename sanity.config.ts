import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structureTool} from 'sanity/structure'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/defaultDocumentNode'
import Logo from './structure/logo'

export default defineConfig({
  icon: Logo,
  name: 'default',
  title: 'Impilo Pop',

  projectId: process.env.PROJECT_ID || '',
  dataset: process.env.DATASET || '',

  // studio: {
  //   components: {
  //     logo: Logo,
  //   },
  // },

  plugins: [structureTool({structure, defaultDocumentNode}), visionTool()],
  // plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
