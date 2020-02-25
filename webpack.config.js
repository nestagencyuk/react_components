const path = require('path')
const ext = require('webpack-node-externals')

/**
 * Plugins
 */
const Bundle = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Prettier = require('prettier-webpack-plugin')
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
    mode: mode,
    devtool: dev && 'inline-source-map',
    devServer: {
      contentBase: dist,
      historyApiFallback: true,
      compress: true,
      host: '0.0.0.0',
      disableHostCheck: true,
      port: 3000
    },
    entry: {
      'index': `${src}/index.ts`,
    },
    // target: 'node',
    // externals: [ext()],
    output: {
      pathinfo: false,
      path: dist,
      publicPath: '/',
      filename: '[name].js',
      libraryTarget: 'commonjs'
    },
    optimization: {
      minimize: true,
      minimizer: [new Terser({})],
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 6,
        maxInitialRequests: 4
      },
    },
    externals: ['react', 'react-router-dom'],
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      alias: {
        'react': `${root}/node_modules/react`,
        'react-router-dom': `${root}/node_modules/react-router-dom`
      },
      modules: ['node_modules']
    },
    plugins: [
      dev && new Bundle(),
      !dev && new Prettier({
        printWidth: 125,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        arrowParens: 'always',
        encoding: 'utf-8',
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
      }),
      !dev && new Css({
        filename: 'main.css',
        chunkFilename: '[id].css'
      }),
      !dev && new Copy([{
        from: `${src}/assets/**/*`,
        to: `${dist}/assets/`,
        flatten: true
      }]),
      !dev && new Gzip({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      !dev && new Brotli({
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
            transpileOnly: dev ? true : false,
            experimentalWatchApi: dev ? true : false
          }
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        },
        {
          test: /\.(scss|css)$/,
          use: [
            dev ? 'style-loader' : Css.loader,
            'css-loader',
            !dev && {
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