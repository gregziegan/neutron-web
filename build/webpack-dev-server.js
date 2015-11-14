import webpack          from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config           from '../config';
import webpackConfig    from './webpack/client';

const paths = config.get('utils_paths');
const GRAPHQL_PORT = 8000;

const server = new WebpackDevServer(webpack(webpackConfig), {
  contentBase : paths.project(config.get('dir_src')),
  hot    : true,
  quiet  : false,
  noInfo : false,
  lazy   : false,
  stats  : {
    colors : true
  },
  historyApiFallback : true,
  proxy: { '/graphql': `http://localhost:${GRAPHQL_PORT}` }
});

export default server;
