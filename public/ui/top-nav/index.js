var moduleName = 'TopNav';
module.exports = moduleName;

angular.module(moduleName, [
    require('./TopNavComponent'),
    require('./TopNavController'),
    require('./TopNavService')
]);
