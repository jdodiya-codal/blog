import {defineQuery} from 'next-sanity'

// lib/queries.js
export const getPostsQuery = defineQuery(`*[_type == "post"]{
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  body,
   author->{
    _id,
    name,
    slug,
    image,
    bio
  }
}`)

export const getCategoriesQuery = `*[_type == "category"]{
  _id,
  slug,
  title,
  mainImage,
  description
}`

export const getPostBySlugQuery = (slug) => `
  *[_type == "post" && slug.current == "${slug}"][0]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    author->{
      name,
      image,
      slug
    },
     comments[]->{
      _id,
      comment,
      createdAt
    }
  }
`
export const getAdvertisingForArticleQuery = `*[_type == "advertising"]{
  _id,
  title,
  image,
  ctaUrl,
}`

export const getInstagramImagesQuery = `*[_type == "instagram"]{
  _id,
  image,
  username,
}`

export const getAuthorDetail = (slug) => `*[_type=='author' &&
  slug.current == "${slug}"]{
  name,
  image,
  bio,
}[0]`

export const getPostsByAuthor = (slug) => `*[_type=='post' &&
author->slug.current == "${slug}"]{
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
    author->{
    _id,
    name,
    slug,
    image,
    bio
  }
}`

export const getCategoryDetail = (slug) => `*[_type=='category' &&
slug.current == "${slug}"]{
title,
mainImage,
description,
}[0]`

export const getPostsByCategory = (slug) => `
  *[_type == "post" && 
    "${slug}" in categories[]->slug.current
  ]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    categories[]->{
      title,
      slug
    }
  }
`

export const getSearchResultsQuery = `
  *[_type == "post" && 
    (title match $query1 + "*" || description match $query1 + "*")
  ]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    categories[]->{
      title,
      slug
    }
  } | order(_createdAt desc)
  
`

export const getCommentsByPostIdQuery = (postId) => `
  *[_type == "comment" && post._ref == "${postId}"] | order(createdAt desc){
    _id,
    comment,
    createdAt,
    name,
    email
  }`

export const getNestedCommentsQuery = (postId) => `
  *[_type == "comment" && !defined(parent) && post._ref == "${postId}"] | order(createdAt asc) {
    _id,
    name,
    comment,
    createdAt,
    "replies": *[_type == "comment" && parent._ref == ^._id] | order(createdAt asc) {
      _id,
      name,
      comment,
      createdAt
    }
  }
`
