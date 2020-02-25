import * as path from 'path'
import { buildScaffold } from '@nestagencyuk/typescript_lib-backend'

/**
 * Scaffold a new component
 *
 * @param {Object} params
 * Component options
 */
const scaffold = async ({ name, type = 'stateless' }: { name: string, type: 'stateful' | 'stateless'}) => {
  const baseDir = path.resolve(__dirname, './src/components/')
  const tmpDir = `${baseDir}/_Template`
  const newDir = `${baseDir}/${name}`

  try {
    await buildScaffold(name, type, tmpDir, newDir)
  } catch (err) {
    console.error(err)
  }

  return 'Done scaffolding 🎉'
}

export { scaffold }
require('make-runnable/custom')({ printOutputFrame: false })
