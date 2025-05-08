// lib/sanity.js
import {createClient} from '@sanity/client'

export const sanity = createClient({
  projectId: '911h91ed', // Replace with your project ID
  dataset: 'production', // Or your dataset name
  apiVersion: '2023-01-01', // Use a fixed date
  useCdn: false, // `false` if you want fresh data every time
})
