const path = require('path');

module.exports = {
  entry: './src/MarkdownTable.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'MarkdownTable',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
