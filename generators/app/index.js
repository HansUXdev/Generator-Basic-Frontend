const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the shining ' + chalk.red('generator-basic-frontend') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'Project Name: ',
      default: 'Project'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    // Webpack
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );

    // Package.json
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );

    // Index
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),
      { title:  this.props.name}
    );

    // JS
    this.fs.copy(
      this.templatePath('src/'),
      this.destinationPath('src/')
    );
  }

  install() {
    this.installDependencies();
  }
};
