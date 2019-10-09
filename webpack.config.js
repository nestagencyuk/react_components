const path = require('path')

/**
 * Plugins
 */
const Bundle = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Output = require('write-file-webpack-plugin')
const Prettier = require('prettier-webpack-plugin')
const Css = require('mini-css-extract-plugin')
const AutoPrefix = require('autoprefixer')
const Minify = require('cssnano')

const config = (mode) => {
  const root = path.resolve(process.cwd())
  const src = `${root}/src/`
  const dist = `${root}/dist/`

  return {
    context: src,
    mode: 'production', // For hooks to work whilst developinvg locally - https://github.com/facebook/react/issues/13991
    watch: mode === 'dev' ? true : false,
    entry: `${src}/Index.tsx`,
    optimization: {
      minimize: true
    },
    output: {
      path: dist,
      publicPath: '/',
      filename: 'index.js',
      libraryTarget: 'commonjs'
    },
    externals: ['react', 'react-router-dom'],
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      alias: {
        '@assets': `${src}/assets/`,
        '@components': `${src}/components/`,
        '@hoc': `${src}/hoc/`
      },
      modules: ['node_modules']
    },
    plugins: [
      // mode === 'dev' && new Bundle(),
      // mode === 'dev' && new Output(),
      new Prettier({
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        arrowParens: 'always',
        encoding: 'utf-8',
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
      }),
      new Css({
        filename: 'main.css',
        chunkFilename: '[id].css'
      }),
    ].filter((x) => !!x),
    module: {
      rules: [
        {
          test: /\.(tsx|ts)$/,
          exclude: /node_modules/,
          loader: 'ts-loader'
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        },
        {
          test: /\.(scss|css)$/,
          use: [
            Css.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  AutoPrefix(),
                  Minify({ preset: 'default' }),
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  `${src}/assets/scss/`,
                  `${src}/components/`
                ]
              }
            }
          ]
        },
        {
          test: /\.(jpg|png|gif|pdf|ico|zip|txt)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/img/[name].[ext]'
              },
            },
          ]
        }
      ]
    }
  }
}

module.exports = config