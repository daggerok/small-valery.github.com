export default {
  port: 8000,
  stats: 'minimal',
  historyApiFallback: true,
  progress: true,
  inline: true,
  proxy: {
    "/api": "http://localhost:8080"
  }
};
