import type {StructureResolver} from 'sanity/structure'
import {CalendarIcon, UsersIcon, PinIcon} from '@sanity/icons'
import {MdCampaign, MdEmojiEvents, MdFace, MdFastfood} from 'react-icons/md'
import {SlSocialInstagram} from 'react-icons/sl'
import {CiLocationArrow1} from 'react-icons/ci'
import {IoFitnessOutline} from 'react-icons/io5'
import {FiMusic} from 'react-icons/fi'
import {SiAnimalplanet} from 'react-icons/si'
import {IoCarSportSharp} from 'react-icons/io5'
import {MdSportsSoccer} from 'react-icons/md'
import {FaWpforms} from 'react-icons/fa'

import {IoIosTrendingUp} from 'react-icons/io'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Blog Content')
    .items([
      // S.documentTypeListItem('post').title('Posts').icon(CalendarIcon),
      // posts
      S.listItem()
        .title('Posts')
        .icon(CalendarIcon)
        .child(
          S.list()
            .title('Posts')
            .items([
              S.listItem().title('All Posts').child(S.documentTypeList('post').title('All Posts')),

              S.listItem()
                .title('Fitness')
                .icon(IoFitnessOutline)
                .child(
                  S.documentTypeList('post')
                    .title('Fitness Posts')
                    .filter('_type == "post" && "fitness" in categories[]->slug.current'),
                ),

              S.listItem()
                .title('Music')
                .icon(FiMusic)
                .child(
                  S.documentTypeList('post')
                    .title('Music Posts')
                    .filter('_type == "post" && "music" in categories[]->slug.current'),
                ),

              S.listItem()
                .title('Food')
                .icon(MdFastfood)
                .child(
                  S.documentTypeList('post')
                    .title('Food Posts')
                    .filter('_type == "post" && "food" in categories[]->slug.current'),
                ),

              S.listItem()
                .title('Animal')
                .icon(SiAnimalplanet)
                .child(
                  S.documentTypeList('post')
                    .title('Animal Posts')
                    .filter('_type == "post" && "animal" in categories[]->slug.current'),
                ),

              S.listItem()
                .title('Car')
                .icon(IoCarSportSharp)
                .child(
                  S.documentTypeList('post')
                    .title('Car Posts')
                    .filter('_type == "post" && "car" in categories[]->slug.current'),
                ),

              S.listItem()
                .title('Technology')
                .icon(IoIosTrendingUp)
                .child(
                  S.documentTypeList('post')
                    .title('Technology Posts')
                    .filter('_type == "post" && "technology" in categories[]->slug.current'),
                ),

              S.listItem()
                .title('Sports')
                .icon(MdSportsSoccer)
                .child(
                  S.documentTypeList('post')
                    .title('Sports Posts')
                    .filter('_type == "post" && "sports" in categories[]->slug.current'),
                ),
            ]),
        ),

      // S.documentTypeListItem('author').title('Artists').icon(UsersIcon),
      S.listItem()
        .title('Artists')
        .icon(UsersIcon)
        .child(
          S.list()
            .title('Artists')
            .items([
              S.listItem()
                .title('All Artists')
                .child(
                  S.documentTypeList('author').title('All Artists').filter('_type == "author"'),
                ),

              S.listItem()
                .title('Favourite Artists')
                .icon(MdFace)
                .child(
                  S.documentTypeList('author')
                    .title('Favourite Artists')
                    .filter('_type == "author" && favourite == true')
                    .initialValueTemplates([
                      S.initialValueTemplateItem('author', {isFavourite: true}),
                    ]),
                ),
            ]),
        ),

      S.documentTypeListItem('category').title('Category').icon(PinIcon),
      S.documentTypeListItem('advertising').title('Advertising').icon(MdCampaign),
      S.documentTypeListItem('instagram')
        .title('Instagram Showcase Pictures')
        .icon(SlSocialInstagram),
      S.documentTypeListItem('event').title('Events').icon(MdEmojiEvents),
      S.documentTypeListItem('artist').title('Events Artist').icon(MdFace),
      S.documentTypeListItem('venue').title('Events Venues').icon(CiLocationArrow1),
      S.documentTypeListItem('formSubmission').title('Forms').icon(FaWpforms),
    ])
