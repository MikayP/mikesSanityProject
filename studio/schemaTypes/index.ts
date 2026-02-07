import page from './documents/page'
import mainMenu from './documents/mainMenu'
import blogList from './documents/blogList'
import contentBuilder from './fields/contentBuilder'
import row from './types/row'
import column from './types/column'
import heading from './fields/heading'
import imageField from './fields/imageField'
import advancedText from './fields/advancedText'
import button from './fields/button'
import buttonStyles from './fields/buttonStyles'
import link from './fields/link' 
import publishedDate from './fields/publishedDate'  
import menuItem from './fields/menuItem'
import hero from './types/hero'
import card from './objects/card'
import form from './objects/form'
import seo from './objects/seo'


export const schemaTypes = [ page, mainMenu, seo, blogList, publishedDate, menuItem, card, row, hero, contentBuilder, 
    heading, column, imageField, advancedText, button, buttonStyles, form, link ]
