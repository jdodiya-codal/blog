import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'instagram',
  title: 'Instagram',
  type: 'document',
  fields: [
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'username',
      media: 'image',
    },
  },
})
