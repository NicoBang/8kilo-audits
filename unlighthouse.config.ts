export default {
  scanner: {
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
    dynamicSampling: 5,
    maxRoutes: 100,
    throttle: true,
  },
  lighthouse: {
    onlyCategories: ['performance', 'accessibility'],
  },
  puppeteerOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  },
  puppeteerClusterOptions: {
    timeout: 180000,
    concurrency: 2,
  },
}
