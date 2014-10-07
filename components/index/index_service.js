angular.module('codehardApp')
    .service('IndexService', [

        function() {

            var self = this;

            var team = [{
                name: "Kalyan Sriram",
                photo: "images/team/0001.jpg"
            }, {
                name: "Prasanth",
                photo: "images/team/0002.jpg"
            }];

            var slides = [{
                title: "Movie Addict",
                photo: "images/slides/0001.jpg"
            }, {
                title: "Movie Addict",
                photo: "images/slides/0001.jpg"
            }];

            var apps = [{
                name: "Movie Addict",
                platform: "Android",
                version: "1.0",
                catergory: "Entertainment",
                playUrl: "https://play.google.com/codeharddevelopers/movie-addict",
                featureImg: "images/app/movie-addict/feature/0001.jpg",
                icon: "images/app/movie-addict/logo/0001.jpg"
            }];

            var navList = [{
                title: "Hello!",
                hash: "index"
            }, {
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

            var socialLink = [{
                title: "Facebook",
                url: "#",
                icon: "images/facebook-53.png"
            }, {
                title: "Twitter",
                url: "#",
                icon: "images/twitter-53.png"
            }, {
                title: "Google Play",
                url: "#",
                icon: "images/play-53.png"
            }]

            self.getNavList = function() {
                return navList;
            };

            self.getSocialList = function() {
                return socialLink;
            };
        }
    ]);