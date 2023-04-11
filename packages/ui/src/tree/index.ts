import type { App } from 'vue'
import staticData from '../utils'

import Tree from './tree'

staticData.setStaticData({
  component: Tree
})

export { Tree }

export default {
  install(app: App): void {
    app.use(Tree as any)
  }
}