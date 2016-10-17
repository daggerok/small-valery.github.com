import webpack from 'webpack';
import config from './common.babel';

const vendors = 'vendors';

//config.devtool = false;
config.devtool = '#cheap-source-map';
config.output.sourceMapFilename = 'maps/[file].map';

config.plugins = [
  ...config.plugins,
  new webpack.optimize.CommonsChunkPlugin(
    // chunkName=
    vendors,
    // filename=
    `${vendors}.js`
  ),
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    mangle: {
      keep_fnames: true,
    }
  }),
  new webpack.DefinePlugin({
    /*
    'process.env': {
      'ENV': JSON.stringify(ENV)
    }
    */
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
];

export default config;
