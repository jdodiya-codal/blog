import type {StructureResolver} from 'sanity/structure'
import {CalendarIcon, UsersIcon, PinIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem('post').title('Events').icon(CalendarIcon),
      S.documentTypeListItem('author').title('Artists').icon(UsersIcon),
      S.documentTypeListItem('category').title('Category').icon(PinIcon),
    ])
