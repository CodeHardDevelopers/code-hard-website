angular.module('codehardApp')
    .directive("toggleMenu", function() {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                scope.$watch(attrs.toggleMenu, function(newVal) {
                    if ($(element).siblings('label').css("display") == "block") {
                        if (newVal) {
                            $(element).animate({
                                "height": $(element).children('ul').innerHeight() + "px"
                            });
                        } else {
                            $(element).animate({
                                "height": "0px"
                            });
                        }
                    } else {
                        $(element).removeAttr('style');
                    }
                });
            }
        }
    })
    .directive("headerCollapse", ['$window',
        function($window) {
            return {
                restrict: "A",
                link: function(scope, element, attrs) {
                    $($window).scroll(function() {
                        if (parseInt($(".wrapper .container").css("padding-top")) < $($window).scrollTop()) {
                            $(element).addClass("header-collapse");
                        }else{
                            $(element).removeClass("header-collapse");
                        }                       
                    });
                }
            }
        }
    ]);