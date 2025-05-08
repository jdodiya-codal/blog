import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structureTool} from 'sanity/structure'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'blog',

  projectId: '911h91ed',
  dataset: 'production',

  // plugins: [structureTool({structure, defaultDocumentNode}), visionTool()],
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
