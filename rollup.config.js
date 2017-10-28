import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';

export default {
  input: 'src/index.ts',

  output: [
    {
      file: 'dist/rain.js',
      format: 'umd',
      name: 'Rain',
      sourcemap: true
    },
    {
      file: 'dist/rain.es.js',
      format: 'es',
      sourcemap: true
    }
  ],

  plugins: [
    typescript({
      typescript: require('typescript')
    }),
    resolve({
      module: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ],

  external: []

  // onwarn: [],
  // cache: []
};
