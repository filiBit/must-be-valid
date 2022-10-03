import url from 'url'
import path from 'path'

const dirname = url.fileURLToPath(new URL('.', import.meta.url))

export default {
  mode: 'production',
  entry: {
    esm: {
      import: './src/index.ts',
      filename: 'must-be-valid.js',
      library: {
        type: 'module',
      },
    },
    cjs: {
      import: './src/index.ts',
      filename: 'must-be-valid.cjs',
      library: {
        type: 'commonjs',
      },
    },
  },
  output: {
    path: path.resolve(dirname, './dist'),
    clean: true,
  },
  experiments: {
    outputModule: true,
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
