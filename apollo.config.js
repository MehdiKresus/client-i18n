module.exports = {
  client: {
    service: {
      name: 'kresus backend',
      // URL to the GraphQL API
      url: 'https://localhost:3000/graphql',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
      'src/**/*.ts',
    ],
  },
}
