angular.module('codehardApp')
    .controller('NavController', ['$location', 'IndexService',
        function($location, IndexService) {
        	var self = this;        	

        	self.navList = [{
                title: "Apps",
                hash: "apps"
            }, {
                title: "Blog",
                hash: "blog"
            }, {
                title: "About",
                hash: "about"
            }, {
                title: "Get in touch",
                hash: "get-in-touch"
            }];

        	self.getSelected = function(nav){   
        		return "/"+(nav.hash) == $location.path();
        	};


        }
    ]);