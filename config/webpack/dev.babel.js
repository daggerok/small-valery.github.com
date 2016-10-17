import config from './common.babel';
import devServer from './devServer.babel';

export default {
  ...config,
  devServer,
  devtool: '#eval',
};
