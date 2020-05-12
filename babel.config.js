module.exports = function (api) {
  const isDev = api.env() === 'development'

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
        loose: true,
        debug: false,
        targets: {
          node: 'current'
        }
      }
    ]
  ]

  const plugins = [
    '@babel/plugin-proposal-class-properties'
  ]

  if (!isDev) {
    presets.push([
      'minify',
      {
        keepFnName: false
      }
    ])
  }

  return {
    presets,
    plugins
  }
}