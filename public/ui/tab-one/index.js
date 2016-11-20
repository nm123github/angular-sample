var moduleName = 'TabOne';

angular.module(moduleName, [
    require('./TabOneComponent'),
    require('./TabOneController'),
    require('./TabOneService')
]);

module.exports = moduleName;
