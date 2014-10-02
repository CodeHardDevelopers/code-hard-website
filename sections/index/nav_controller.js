angular.module('codehardApp')
    .controller('NavController', ['$location', 'IndexService',
        function($location, IndexService) {
            var self = this;

            self.toggleMenu = false;
            self.navList = IndexService.getNavList();
            self.socialList = IndexService.getSocialList();

            self.getSelected = function(nav) {
                return ($location.path() == "" && nav.hash == self.navList[0].hash) || ("/" + (nav.hash) == $location.path());
            };
        }
    ]);