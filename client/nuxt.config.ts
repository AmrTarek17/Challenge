// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
})
// module.exports = {
//   devServer: {
//     open: process.platform === 'darwin',
//     host: '0.0.0.0',
//     port: 443, // CHANGE YOUR PORT HERE!
//     https: true,
//     hotOnly: false,
//   },
// }