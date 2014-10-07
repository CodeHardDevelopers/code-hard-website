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
    .directive("headerCollapse", function() {
        return {
             restrict: "A",
             link: function(scope, element, attrs){
                 $("body").scroll(function(){
                    console.log($("body").scrollTop());
                 })
             }
        }
    });