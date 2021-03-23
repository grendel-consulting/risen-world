const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.onPreBootstrap = ({ store, reporter }) => {
    const { program } = store.getState()

    const dirs = [
        path.join(program.directory, "src/pages"),
        path.join(program.directory, "src/posts"),
        path.join(program.directory, "src/images"),
    ]

    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            reporter.log(`creating the ${dir} directory`)
            mkdirp.sync(dir)
        }
    })
}