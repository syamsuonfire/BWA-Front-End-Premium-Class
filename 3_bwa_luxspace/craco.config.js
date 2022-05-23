module.exports = {
  mode: 'development',
  style: {
    postcsss: {
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
      ],
    },
  },
  resolve: {
    extentions: ['.ts', '.js'],
    fallback: {
      buffer: require.resolve('buffer'),
    },
  },
};
