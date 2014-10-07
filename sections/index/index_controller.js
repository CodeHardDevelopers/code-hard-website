angular.module('codehardApp')
    .controller('IndexController', ['IndexService',
        function(IndexService) {
        	  var self = this;

        	  self.headerCollapse = false;
              self.navList = IndexService.getNavList();
        }
    ]);