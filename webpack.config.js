const path = require('path')

/**
 * Plugins
 */
// const Bundle = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Output = require('write-file-webpack-plugin')
const Css = require('mini-css-extract-plugin')
const Copy = require('copy-webpack-plugin')
const AutoPrefix = require('autoprefixer')
const Minify = require('cssnano')
const Brotli = require('brotli-webpack-plugin')
const Gzip = require('compression-webpack-plugin')
const Terser = require('terser-webpack-plugin')
const ForkTs = require('fork-ts-checker-webpack-plugin')

/**
 * Paths
 */
const root = path.resolve(__dirname)
const src = `${root}/src/`
const dist = `${root}/dist/`

/**
 * Config
 */
const config = (env) => {
  const mode = env ? env.NODE_ENV : 'development'
  const dev = mode === 'development'
  console.log('MODE:', mode)

  return {
    context: root,
    mode: 'production',
    devtool: dev && 'inline-source-map',
    devServer: {
      contentBase: dist,
      historyApiFallback: true,
      compress: true,
      host: '0.0.0.0',
      disableHostCheck: true,
      port: 3003
    },
    entry: {
      index: `${src}/index.ts`
    },
    output: {
      pathinfo: false,
      path: dist,
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[name].js',
      library: '/',
      libraryTarget: 'commonjs2'
    },
    optimization: {
      minimize: !dev,
      minimizer: dev ? [] : [new Terser()]
    },
    externals: ['react', 'react-router-dom'],
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      alias: {
        react: `${root}/node_modules/react`,
        'react-router-dom': `${root}/node_modules/react-router-dom`
      },
      modules: ['node_modules']
    },
    plugins: [
      // dev && new Bundle(),
      dev && new Output(),
      new Css({
        filename: 'assets/main.css'
      }),
      new Copy([
        {
          from: `${src}/assets/**/*`,
          to: `${dist}/assets/`,
          flatten: true
        }
      ]),
      !dev &&
      new Gzip({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      !dev &&
      new Brotli({
        asset: '[path].br[query]',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      new ForkTs()
    ].filter((x) => !!x),
    module: {
      rules: [
        {
          test: /\.(tsx|ts)$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {
            transpileOnly: dev,
            experimentalWatchApi: dev
          }
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
            !dev && {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [AutoPrefix(), Minify({ preset: 'default' })]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  `${root}/node_modules/scss_lib/`,
                  `${src}/assets/scss/config/`,
                  `${src}/assets/scss/functions/`,
                  `${src}/assets/scss/mixins/`,
                  `${src}/assets/scss/global/`,
                  `${src}/components/`
                ]
              }
            }
          ].filter((x) => !!x)
        },
        {
          test: /\.(jpg|png|gif|glb|pdf|ico|zip|txt|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[name].[ext]'
              }
            }
          ]
        }
      ]
    }
  }
}

module.exports = config
