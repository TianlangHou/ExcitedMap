/**
 * Created by Jinkai on 2016/5/20.
 */
// Declare app level module which depends on filters, and services
angular.module('myApp',['ionic', 'myApp.directives', 'myApp.filters', 'myApp.services', 'myApp.controllers', 'nsPopover'])

.run(function($ionicPlatform){
        $ionicPlatform.ready(function(){
            if(window.cordova && window.cordova.plugins.Keyboard){
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar){
                StatusBar.styleDefault();
            }
        });
    })

.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('tutorial',{
            url:'/',
            templateUrl:'partials/tutorial.html',
            controller:'TutorialCtrl'
        })

        .state('tabs', {
            url: "/tab",
            abstract: true,
            controller: 'AppCtrl',
            templateUrl: "partials/menu.html"
        })

        .state('tabs.home', {
            url: "/home",
            views: {
                'home-tab': {
                    templateUrl: "partials/home.html",
                    controller: 'HomeTabCtrl'
                }
            }
        })

        .state('tabs.login', {
            url: "/login",
            views: {
                'menuContent': {
                    templateUrl: "partials/login.html"
                }
            },
            authStatus: false
        })

        .state('tabs.register', {
            url: "/register",
            views: {
                'menuContent': {
                    templateUrl: "partials/register.html"
                }
            },
            authStatus: false
        })

        .state('tabs.list', {
            url: "/list",
            views: {
                'list-tab': {
                    templateUrl: "partials/list.html"
                }
            }
        })

        .state('tabs.list.detail_list1', {
            url: "/detail_list1",
            views: {
                'tab-dash1': {
                    templateUrl: "partials/detail_list1.html"
                }
            }
        })

        .state('tabs.list.detail_list2', {
            url: "/detail_list2",
            views: {
                'tab-dash1': {
                    templateUrl: "partials/detail_list2.html"
                }
            }
        })

        .state('tabs.list.detail_list3', {
            url: "/detail_list3",
            views: {
                'tab-dash1': {
                    templateUrl: "partials/detail_list3.html"
                }
            }
        })

        .state('tabs.list.detail_list4', {
            url: "/detail_list4",
            views: {
                'tab-dash1': {
                    templateUrl: "partials/detail_list4.html"
                }
            }
        })

        .state('tabs.list.detail_list5', {
            url: "/detail_list5",
            views: {
                'tab-dash1': {
                    templateUrl: "partials/detail_list5.html"
                }
            }
        })

        .state('tabs.list.detail', {
            url: "/detail",
            views: {
                'tab-dash1': {
                    templateUrl: "partials/detail.html",
                    controller: 'DetailCtrl'
                }
            }
        })

        .state('tabs.nearby', {
            url: "/nearby",
            views: {
                'nearby-tab': {
                    templateUrl: "partials/nearby.html",
                    controller: 'NearByTabCtrl'
                }
            }
        });
        $urlRouterProvider.otherwise('/');
});