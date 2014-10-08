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
                        } else {
                            $(element).removeClass("header-collapse");
                        }
                    });
                }
            }
        }
    ]).directive("navScroll", ['$location', '$timeout',
        function($location, $timeout) {
            return {
                restrict: "A",
                link: function(scope, element, attrs) {
                    $(element).on("click", function() {
                        $timeout(function() {
                            $('html, body').animate({
                                scrollTop: ($("#" + $location.path().replace('/', '')).offset().top - (parseInt($(".wrapper .container").css("padding-top"))))
                            }, 700);
                        });
                    });
                }
            }
        }
    ]).directive("navSpyable", ['$window', '$location',
        function($window, $location) {
            return {
                restrict: "A",
                link: function(scope, element, attrs) {
                    var spies = $(element).find(".spyable");

                    $($window).scroll(function(){
                        var a = $($window).scrollTop();
                        $.each(spies, function(i,e){
                            var top = parseInt(parseInt($(".wrapper .container").css("padding-top")));
                            var start = $(e).offset().top - top;
                            var end = start + $(e).height();                           

                            if(a <= end && a >= start) {
                            	scope.$apply(function(){
                            		$location.path($(e).attr("id"));
                            	});                           	
                            }
                            
                        });
                    });
                }
            }
        }
    ]);