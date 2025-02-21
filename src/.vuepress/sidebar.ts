import { sidebar } from 'vuepress-theme-hope'
import { fileTreeToRoutes } from '../utils/fileTree.js'

export default sidebar(fileTreeToRoutes())
