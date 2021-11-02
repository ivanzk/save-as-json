import { uglify } from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: './lib/index.esm.js',
        format: 'esm',
      },
      {
        file: './lib/index.js',
        format: 'cjs',
        exports: 'auto',
      },
      {
        file: './lib/save-as-json.umd.js',
        format: 'umd',
        exports: 'auto',
        name: 'saveAsJSON',
      },
    ],
    plugins: [typescript()],
  },
  {
    input: './src/index.ts',
    output: [
      {
        file: './lib/save-as-json.min.umd.js',
        format: 'umd',
        exports: 'auto',
        name: 'saveAsJSON',
      },
    ],
    plugins: [typescript(), uglify()],
  },
];
