import { sidebar } from 'vuepress-theme-hope'
import { readDocTree } from '../utils/readDocTree.js'

export default sidebar(readDocTree())
