var moduleName = 'TabTwo';
module.exports = moduleName;

angular.module(moduleName, [
    require('./TabTwoComponent'),
    require('./TabTwoController'),
    require('./TabTwoService'),
    require('@my-table')
]);
