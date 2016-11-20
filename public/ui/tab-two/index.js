var moduleName = 'TabTwo';

angular.module(moduleName, [
    require('./TabTwoComponent'),
    require('./TabTwoController'),
    require('./TabTwoService'),
    require('@my-table')
]);

module.exports = moduleName;
