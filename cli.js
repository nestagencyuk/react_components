#!/usr/bin/env node
const path = require('path')
const fs = require('fs-extra')

/**
 * Unpack styles into consumer project
 */
const init = ({ dest }) => {
  const src = path.resolve(__dirname, './src/assets/scss/')
  const out = path.join(process.cwd(), dest)
  const files = fs.readdirSync(src).map((x) => x)

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  files.forEach((x) => {
    const dest = `${out}${x}`
    const filename = x.replace('.scss', '')
    const data =
      `/// ----------------------------------------------------------------------

/// ${capitalize(filename.replace('_', ''))}

/// ----------------------------------------------------------------------

@use '@react-components/${filename}';
@forward '@react-components/${filename}';
    `

    fs.writeFile(dest, data, 'utf8', (err) => {
      if (err) throw err
      console.log('The file has been saved!')
    })
  })
  return ''
}

module.exports = init
require('make-runnable/custom')({ printOutputFrame: false })