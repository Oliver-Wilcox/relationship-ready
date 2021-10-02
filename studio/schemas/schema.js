// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import subTitle from './subTitle'
import author from './author'
import pathsTitle from './pathsTitle'
import testimonialImages from './testimonialImages'
import testimonialText from './testimonialText'
import testimonialBtn from './testimonialBtn'
import pathParagraph from './pathParagraph'
import lilaTitle from './lilaTitle'
import getInTouchText from './getInTouchText'
import retreatPage from './retreatPage'
import programmesContent from './programmesContent'



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    category,
    subTitle,
    testimonialImages,
    testimonialText,
    testimonialBtn,
    lilaTitle,
pathsTitle,
pathParagraph,
getInTouchText,
retreatPage,
programmesContent,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
