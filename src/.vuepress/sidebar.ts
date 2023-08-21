import { sidebar } from 'vuepress-theme-hope'
import { readDocTree } from '../utils/readDocTree'

export default sidebar(readDocTree() as any)
