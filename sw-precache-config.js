module.exports = {
    navigateFallback: '/index.html',
    stripPrefix: 'dist',
    root: 'dist/',
    staticFileGlobs: [
        'dist/index.html',
        'dist/**.js',
        'dist/**.css'
    ],
    runtimeCaching: [{
        urlPattern: "/products.js",
        handler: 'cacheFirst'
    },
    {
        urlPattern: "https://webshop-staging.aphixsoftware.com/img/**/*.{png,jpg}",
        handler: 'cacheFirst'
    }
    ]
};