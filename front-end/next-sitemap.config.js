/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://devdiegomatos.com.br',
    generateRobotsTxt: true,
    changefreq: 'monthly',
    exclude: [
        '/trabalhos/*/Aside'
    ]
  }
  
module.exports = config;