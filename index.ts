import * as path from 'path'
import { runWebpack, buildScaffold, buildEntry } from 'typescript-lib-backend'

/**
 * Environment variables
 */
const {} = process.env

/**
 * Initialise all the things
 *
 * @param {Object} params
 * The params passed by the command
 */
const init = async ({ mode = 'dev' }: any = {}) => {
  const entryDir = path.resolve(__dirname, './src/')
  const entryName = 'index.ts'
  const srcDir = `${entryDir}/components/`
  const webpackConfig = require('./webpack.config.js')(mode)

  try {
    await buildEntry(entryDir, entryName, srcDir)
    runWebpack(webpackConfig)
    return
  } catch (err) {
    console.error(err)
  }
}

/**
 * Scaffold a new component
 *
 * @param {Object} params
 * Component options
 */
const scaffold = async ({ name, type = 'stateless' }: any = {}) => {
  const baseDir = path.resolve(__dirname, './src/components/')
  const tmpDir = `${baseDir}/_Template`
  const newDir = `${baseDir}/${name}`

  try {
    await buildScaffold(name, type, tmpDir, newDir)
  } catch (err) {
    console.error(err)
  }
}

export { init, scaffold }
require('make-runnable/custom')({ printOutputFrame: false })
