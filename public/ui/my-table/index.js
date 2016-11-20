var moduleName = 'MyTable';

angular.module(moduleName, [
    require('./MyTableComponent'),
    require('./MyTableController'),
    require('./MyTableService')
]);

module.exports = moduleName;