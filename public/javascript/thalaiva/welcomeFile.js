var application = angular.module('AngularUiDemo', ['ui.calendar', 'ui.bootstrap', 'ui.date', 'ui.event']);
  application.controller('welcomeCtrl', function($scope){
  	$scope.name = "Rajni";
    $scope.myFavDate = "Thursday, 11 October, 2015";
    // for calendar
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

      // for date picker
      $scope.dateOptions = {
        dateFormat: 'mm/dd/yy',
        changeYear: true,
        changeMonth: true,
        yearRange: '1900:-0'
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
