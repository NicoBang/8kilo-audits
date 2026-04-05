export default {
  scanner: {
    // Exclude routes that require authentication or are not useful to audit
    exclude: [
      '/account',
      '/account/*',
      '/cart',
      '/checkout',
      '/checkout/*',
      '*.json',
      '/search',
      '/policies/*',
    ],
    // Sample max 5 pages per dynamic route group (e.g. /products/*)
    dynamicSampling: 5,
    // Limit max routes to avoid scanning hundreds of identical product pages
    maxRoutes: 100,
  },
  lighthouse: {
    // Focus on performance and accessibility
    onlyCategories: ['performance', 'accessibility'],
  },
  // Increase timeout for slower Shopify sites
  puppeteerClusterOptions: {
    timeout: 60000,
  },
}
