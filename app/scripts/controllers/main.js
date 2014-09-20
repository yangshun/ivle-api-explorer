'use strict';

angular.module('ivleApiExplorerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

IVLE.init({
                apiKey: 'O8ieVUFb72IU7feHcKmO3',
                callbackUrl: 'http://localhost:9000'
            });
            
            function login () {
                IVLE.login(function (response) {
                    console.log('UI Logged in to IVLE!');
                    console.log(response);
                });
            }

            function logout () {
                IVLE.logout(function (response) {
                    console.log('UI Logged out of IVLE!');
                    console.log(response);
                });
            }

            function getModules () {
                console.log('Getting modules');
                IVLE.api('Modules', {
                    Duration: 24 * 60 * 60,
                    IncludeAllInfo: false
                }, function (data) {
                    console.log('Modules obtained');
                    $('#output').text(JSON.stringify(data, undefined, 2));
                });
            }

            function getTimetable () {
                console.log('Getting timetable');
                IVLE.api('Timetable_Student', {
                    AcadYear: '2014/2015',
                    Semester: 1
                }, function (data) {
                    $('#output').text(JSON.stringify(data, undefined, 2));
                });
            }

            function getClassRoster () {
                console.log('Getting class roster');
                IVLE.api('Class_Roster', {
                    CourseID: '76a5d2c3-36c6-4ce2-86c4-3d17d3cd1412'
                }, function (data) {
                    $('#output').text(JSON.stringify(data, undefined, 2));
                });
            }

            function getGradebook () {
                console.log('Gradebook');
                IVLE.api('Gradebook_ViewItems', {
                    CourseID: '76a5d2c3-36c6-4ce2-86c4-3d17d3cd1412'
                }, function (data) {
                    $('#output').text(JSON.stringify(data, undefined, 2));
                });
            }

            function getGroups () {
                console.log('Groups');
                IVLE.api('GroupsByUserAndModule', {
                    CourseID: '76a5d2c3-36c6-4ce2-86c4-3d17d3cd1412',
                    AcadYear: '2014/2015',
                    Semester: 1
                }, function (data) {
                    $('#output').text(JSON.stringify(data, undefined, 2));
                });
            }  
