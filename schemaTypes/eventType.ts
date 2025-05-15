import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'
import {DoorsOpenInput} from './components/DoorsOpenInput'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  groups: [
    {name: 'details', title: 'Details'},
    {name: 'editorial', title: 'Editorial'},
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      group: ['details'],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      group: ['details'],
      validation: (rule) => rule.required().error(`Required to generate a page on the website`),
      hidden: (context) => !context.document?.name,
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      group: ['details'],
    }),
    defineField({
      name: 'eventType',
      type: 'string',
      group: ['details'],
      options: {
        list: ['in-person', 'virtual'],
        layout: 'radio',
      },
      deprecated: {
        reason: 'Use the "Event format" field instead.',
      },
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'format',
      type: 'string',
      title: 'Event format',
      options: {
        list: ['in-person', 'virtual'],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'doorsOpen',
      type: 'number',
      group: ['details'],
      description: 'Available Doors to Open',
      initialValue: 60,
      components: {
        input: DoorsOpenInput,
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
      group: ['details'],
      readOnly: ({value, document}) => !value && document?.eventType === 'virtual',
      validation: (rule) =>
        rule.custom((value, context) => {
          if (value && context?.document?.eventType === 'virtual') {
            return 'Only in-person events can have a author'
          }

          return true
        }),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: {type: 'category'},
      group: ['details'],
    }),
    defineField({
      name: 'image',
      type: 'image',
      group: ['editorial'],
    }),
    defineField({
      name: 'tickets',
      type: 'url',
      group: ['editorial'],
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
      group: ['editorial'],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      category: 'category.title',
      artist: 'author.name',
      date: 'date',
      image: 'image',
    },

    prepare({name, category, artist, date, image}) {
      const nameFormatted = name || 'Untitled event'
      const dateFormatted = date
        ? new Date(date).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })
        : 'No date'

      return {
        title: artist ? `${nameFormatted} (${artist})` : nameFormatted,
        subtitle: category ? `${dateFormatted} at ${category}` : dateFormatted,
        media: image || CalendarIcon,
      }
    },
  },
})
