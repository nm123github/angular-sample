describe('calculator', function () {

  beforeEach(module('MyTableController'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('sum', function () {
        it('1 + 2 should equal 3', function () {
            //expect(1+2).toBe(3);
            
            var $scope = {};
            var MyTableService = {
                getRows: function() {
                    return ['row1', 'row2', 'row3'];
                }
            };
            var controller = $controller('MyTableController', { $scope: $scope, MyTableService: MyTableService });
            expect(controller.rows).toEqual(MyTableService.getRows());

        }); 
    });

});