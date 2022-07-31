process.env.NODE_ENV = process.env.BABEL_ENV = 'production'

const gatherPipes = require('../src/loader')
const { webpack: transforms } = gatherPipes(['webpack'])

const patch = require('../src/patch')
const { paths } = require('../src/lib')
const { webpackConfig, build } = paths

patch(transforms, webpackConfig)

require(build)
