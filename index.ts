import * as fs from 'fs-extra'
import * as path from 'path'
import { buildScaffold, processSVGs } from '@nestagencyuk/typescript_lib-backend'
import { capitalise } from '@nestagencyuk/typescript_lib-frontend'

/**
 * Scaffold a new component
 *
 * @param {Object} params
 * Component options
 */
const scaffold = async ({ name, type = 'stateless' }: { name: string; type: 'stateful' | 'stateless' }) => {
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

/**
 * Process icons - lowercase & hyphenate
 */
const iconFiles = async () => {
  const baseDir = path.resolve(__dirname, './src/assets/icons/')

  try {
    await processSVGs(baseDir)
  } catch (err) {
    console.error(err)
  }

  return 'Done processing icons 🎉'
}

/**
 * Generate icon stories
 */
const iconStories = async () => {
  const baseDir = path.resolve(__dirname, './src/assets/flags/')
  const files = await fs.readdir(baseDir)
  const fileToWrite = '.temp/Icon.stories.mdx'

  console.log('Generating Icon stories & TypeScript types...')

  let storiesString = ''
  let iconCount = 0
  let typesString = ''

  for (const x of files) {
    if (x.includes('.svg')) {
      iconCount++
      const iconName = capitalise(x.replace('.svg', ''))
      typesString += `\n | "${iconName}"`
      storiesString += ` <Story name="${iconName}" decorators={[iconDecorator]}><Icon name="${iconName}" /></Story>\n`
    }
  }

  fs.outputFile(
    fileToWrite,
    `\n# YOUR STORYBOOK STORIES \n<Preview>\n${storiesString}</Preview> \n# YOUR TYPESCRIPT TYPES \n ${typesString}`,
    (err) => {
      if (err) throw err
    }
  )

  return `\x1b[32m ${iconCount} stories and relevant TypeScript types generated!`
}

export { scaffold, iconFiles, iconStories }
require('make-runnable/custom')({ printOutputFrame: false })
