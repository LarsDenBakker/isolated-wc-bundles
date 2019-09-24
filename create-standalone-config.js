const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');

module.exports = ({ input }) => ({
    input,
    output: {
      dir: 'dist',
      format: 'system',
      sourcemap: true,
      minify: true,
    },
    plugins: [
      // resolve bare import specifiers
      resolve(),

      // run code through babel
      babel({
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-syntax-import-meta',
          // rollup rewrites import.meta.url, but makes them point to the file location after bundling
          // we want the location before bundling
          ['bundled-import-meta', { importStyle: 'system' }],
          [
            'template-html-minifier',
            {
              modules: {
                'lit-html': ['html'],
                'lit-element': ['html', { name: 'css', encapsulation: 'style' }],
              },
              htmlMinifier: {
                collapseWhitespace: true,
                removeComments: true,
                caseSensitive: true,
                minifyCSS: true,
              },
            },
          ],
        ].filter(_ => !!_),

        presets: [
          [
            '@babel/preset-env',
            {
              // TODO: Add chrome latest 2 etc
              targets: ['ie 11'],
              useBuiltIns: false,
              modules: false,
            },
          ],
        ],
      }),

      // terser(),
    ],
  });
