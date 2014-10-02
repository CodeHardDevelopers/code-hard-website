angular.module('codehardApp')
    .controller('NavController', ['$location', 'IndexService',
        function($location, IndexService) {
        	var self = this;    

        	self.toggleMenu = false;
        	self.navList = IndexService.getNavList();

        	self.getSelected = function(nav){   
        		return "/"+(nav.hash) == $location.path();
        	};
        }
    ]);