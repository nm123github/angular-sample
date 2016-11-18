var moduleName = 'MyTable';
module.exports = moduleName;

angular.module(moduleName, [
    require('./MyTableComponent'),
    require('./MyTableController'),
    require('./MyTableService')
]);
