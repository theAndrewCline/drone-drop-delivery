/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  extends: '@snowpack/app-scripts-react',
  packageOptions: {
    knownEntrypoints: ['styled-components']
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html'
    }
  ],
  devOptions: {
    port: 3000
  }
}
