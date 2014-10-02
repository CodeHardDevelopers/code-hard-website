angular.module('codehardApp')
    .controller('NavController', ['$location', 'IndexService',
        function($location, IndexService) {
        	var self = this;        	

        	self.navList = IndexService.getNavList();

        	self.getSelected = function(nav){   
        		return "/"+(nav.hash) == $location.path();
        	};
        }
    ]);