import url from 'url'
import path from 'path'

const dirname = url.fileURLToPath(new URL('.', import.meta.url))

export default {
  mode: 'production',
  entry: {
    umd: {
      import: './src/index.ts',
      filename: 'must-be-valid.js',
      library: {
        name: 'mustBeValid',
        type: 'umd',
      },
    },
    cjs: {
      import: './src/index.ts',
      filename: 'must-be-valid.cjs',
      library: {
        name: 'mustBeValid',
        type: 'commonjs',
      },
    },
  },
  output: {
    path: path.resolve(dirname, './dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
}
