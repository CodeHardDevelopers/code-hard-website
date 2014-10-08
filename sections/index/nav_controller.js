angular.module('codehardApp')
    .controller('NavController', ['$location', '$anchorScroll', 'IndexService',
        function($location, $anchorScroll, IndexService) {
            var self = this;

            self.toggleMenu = false;
            self.navList = IndexService.getNavList();
            self.socialList = IndexService.getSocialList();

            var init = function() {
                if ($location.path() == "")
                    $location.path(self.navList[0].hash);
            };

            self.getSelected = function(nav) {
                return ("/" + (nav.hash) == $location.path());;
            };

            init();
        }
    ]);