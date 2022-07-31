process.env.NODE_ENV = process.env.BABEL_ENV = 'test'

const gatherPipes = require('../src/loader')
const { jest: transforms } = gatherPipes(['jest'])

const patch = require('../src/patch')
const { paths } = require('../src/lib')
const { createJestConfig, test } = paths

patch(transforms, createJestConfig)

require(test)
