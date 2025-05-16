// structure/defaultDocumentNode.ts
import type {DefaultDocumentNodeResolver} from 'sanity/structure'
import DocumentsPane from 'sanity-plugin-documents-pane'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  if (schemaType === 'author') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(DocumentsPane)
        .options({
          // Show all other artists marked as favourite
          query: '*[_type == "author" && favourite == true] | order(name asc)',
          params: {id: '_id'},
          options: {perspective: 'previewDrafts'},
        })
        .title('Favourite Artists'),
    ])
  }

  return S.document().views([S.view.form()])
}
