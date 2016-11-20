var moduleName = 'TopNav';

angular.module(moduleName, [
    require('./TopNavComponent'),
    require('./TopNavController'),
    require('./TopNavService')
]);

module.exports = moduleName;
