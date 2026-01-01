import page from './documents/page'
import contentBuilder from './fields/contentBuilder'
import row from './types/row'
import column from './types/column'
import heading from './fields/heading'
import imageField from './fields/imageField'
import advancedText from './fields/advancedText'
console.log('advancedText schema:', advancedText); // Add this
export const schemaTypes = [ page , row , contentBuilder, 
    heading, column, imageField, advancedText ]
