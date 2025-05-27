// lib/sanity.js
import {createClient} from '@sanity/client'
import process from 'process'

export const sanity = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: process.env.API_VERSION,
  useCdn: false,
})
