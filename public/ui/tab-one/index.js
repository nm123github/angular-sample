var moduleName = 'TabOne';
module.exports = moduleName;

angular.module(moduleName, [
    require('./TabOneComponent'),
    require('./TabOneController'),
    require('./TabOneService')
]);
