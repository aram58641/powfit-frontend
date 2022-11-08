const os = require('os');

module.exports = {
  apps: [
    {
      instances: os.cpus().length,
      name: 'PowFit - PM2',
      cwd: __dirname,
      autorestart: false,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },

      script: './node_modules/.bin/next',
      args: 'start ./.release --hostname localhost --port 8000',
      interpreter: 'node',
      interpreter_args: '--trace-warnings --unhandled-rejections=strict',

      error_file: './.release/error.log',
      out_file: './.release/output.log',
    },
  ],
};
