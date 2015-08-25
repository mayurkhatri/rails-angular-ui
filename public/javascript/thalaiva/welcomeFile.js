var application = angular.module('AngularUiDemo', ['ui.calendar', 'ui.bootstrap' ]);
  application.controller('welcomeCtrl', function($scope){
  	$scope.name = "Rajni";
	$scope.uiConfig = {
      calendar:{
        firstDay: new Date().getDay(),
        defaultView: 'agendaWeek',
        height: 'auto',
        header:{
          left: 'agendaDay agendaWeek month',
          center: 'title',
          right: 'today prev,next'
        },
        views: {
          agendaWeek: {
            titleFormat: 'MMMM DD, YYYY',
          }
        },
        slotDuration: '01:00:00',
        allDaySlot: false,
        selectable: true,
        selectOverlap: false,
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDropOrResize,
        eventResize: $scope.alertOnDropOrResize,
        eventRender: $scope.eventRenderContent,
        dayClick: $scope.dayEvent,
        select: $scope.slotSelected,
        viewRender: $scope.viewRenderWeekAgenda,
        editable: true,
        timezone: 'local'
      }
    };

    $scope.viewRenderWeekAgenda = function(){
    	console.log("in viewRenderWeekAgenda");
    }
    $scope.alertEventOnClick = function(){
    	console.log("in alertEventOnClick");
    }
    $scope.alertOnDrop = function(){
    	console.log("in alertOnDrop");
    }
    $scope.alertOnResize = function(){
    	console.log("in alertOnResize");
    }
  	$scope.eventSources = [];
  });
