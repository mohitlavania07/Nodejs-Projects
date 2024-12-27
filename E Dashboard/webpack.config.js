const path = require('path');

module.exports = {
    // other webpack configurations...
    resolve: {
        fallback: { 
            "zlib": require.resolve("browserify-zlib"),
            "querystring": require.resolve("querystring-es3"),
            "path": require.resolve("path-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "http": require.resolve("stream-http"),
            "net": require.resolve("net"),
            "url": require.resolve("url/"),
            "fs": false // or use a polyfill if needed
        }
    }
};
