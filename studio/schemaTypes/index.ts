import page from './documents/page'
import mainMenu from './documents/mainMenu'
import contentBuilder from './fields/contentBuilder'
import row from './types/row'
import column from './types/column'
import heading from './fields/heading'
import imageField from './fields/imageField'
import advancedText from './fields/advancedText'
import button from './fields/button'
import link from './fields/link' 
import menuItem from './fields/menuItem'
import hero from './types/mainHero'

export const schemaTypes = [ page, mainMenu, menuItem, row, hero, contentBuilder, 
    heading, column, imageField, advancedText, button, link ]
