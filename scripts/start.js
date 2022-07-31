process.env.NODE_ENV = process.env.BABEL_ENV = 'development'

const gatherPipes = require('../src/loader')
const { webpack: webpackTransforms, devServer: devServerTransforms } = gatherPipes(['webpack', 'devServer'])

const { forEach } = require('ramda')
const patch = require('../src/patch')
const { paths } = require('../src/lib')
const { webpackConfig, webpackDevServerConfig, start } = paths

forEach(
  args => patch(...args),
  [
    [webpackTransforms, webpackConfig],
    [devServerTransforms, webpackDevServerConfig],
  ]
)

require(start)
