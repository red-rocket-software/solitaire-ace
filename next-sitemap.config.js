/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || '',
  generateRobotsTxt: true,
};

module.exports = sitemapConfig;
