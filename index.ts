import * as path from 'path'
import { server, runWebpack, buildScaffold, buildEntry } from 'typescript-lib-backend'

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
const init = async (params: any) => {
  const { mode = 'dev' } = params || {}

  const entryDir = path.resolve(__dirname, './src/')
  const entryName = 'Index.tsx'
  const srcDir = `${entryDir}/components/`
  const webpackConfig = require('./webpack.config.js')(mode)

  try {
    switch (mode) {
      // We cannot run in dev mode and start a WDS as it causes an issue with hooks
      // and multiple React instances - https://github.com/facebook/react/issues/13991
      // case 'dev':
      //   await buildEntry(entryDir, entryName, srcDir)
      //   return server(webpackConfig, 3001)
      default:
        await buildEntry(entryDir, entryName, srcDir)
        return runWebpack(webpackConfig)
    }
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
const scaffold = async (params: any = {}) => {
  const { name, type = 'stateless' } = params
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
