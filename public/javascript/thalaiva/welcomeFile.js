var application = angular.module('AngularUiDemo', ['ui.bootstrap', 'ui.date', 'ui.event','ui.slider', 'ui.validate']);
  application.controller('welcomeCtrl', function($scope){
  	$scope.name = "Mayur";
    $scope.myFavDate = "Thursday, 11 October, 2015";
    $scope.testVal = 15;
    // For Slider
    $scope.items = [{name: 'chopper', cost: '100'}, {name: 'fighter-jet', cost: '50'}, {name: 'tank', cost: '150'}]

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
