// lib/queries.js
export const getPostsQuery = `*[_type == "post"]{
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
}`

export const getCategoriesQuery = `*[_type == "category"]{
  _id,
  title,
  mainImage,
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
      image
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
