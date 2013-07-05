angular.module("pipelineDirectives", []).

directive('rxPipeline', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "directives/pipeline.html",
        scope: {
            pipeline: '=',
            step: '='
        },
		link: function(scope, element, attrs) {
		}
    };
}).
directive("rxPipelineStep", function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "directives/pipelineStep.html",
        scope: {
            'pipeline': '=',
            'step': '='
        },
        link: function (scope, element, attrs) {
            var localOnly = attrs["localOnly"];
            
            scope.showStep = (((localOnly == "true") && (scope.step.global == false))||(localOnly != "true")) ? true : false;
        }
    };
}).
directive("rxPipelineList", function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "directives/pipelineList.html",
        scope: {
            "pipelines": "=",
            "steps": "="
        },
        link: function (scope, element, attrs) {
            scope.pipelineData = scope.pipelines.getPipelines();
            
            scope.getCurrentTab = function() {
                return scope.currentTab;
            }
            scope.setTab = function(tab) {
                scope.currentTab = tab;
            }
            scope.setTab("pipelines");
        }
    };
}).
directive("rxPipelineStepControls", function($compile) {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "directives/pipelineStepControls.html",
        scope: {
            pipelineStep: "="
        },
        link: function (scope, element, attrs) {
            scope.displayConsole = function () {
                var d = document.createElement("rx-console-output");
                d.setAttribute("step", "pipelineStep");
                
                d = $compile(d)(scope);
                
                element.parent().append(d);
                
                $("#console-output").modal("show");
            };
        }
    };
}).
directive("rxConsoleOutput", function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/consoleOutput.html',
        scope: {
            step: '='
        },
        link: function (scope, element, attrs) {
            console.log(scope.step);
            var consoleInfo = scope.step.getConsoleData();
            
            // Pre-Fill the console output with what's already run
            scope.consoleData = consoleInfo.data;
            
            if (consoleInfo.stillRunning) {
                // We're going to hook the consoleData variable into the socket output
                step.hookConsoleOutput(scope);
            }
        }
    };
}).
directive("rxGlobalStep", function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "directives/globalStep.html",
        scope: {
            'step': '=',
            'currentTab': '='
        },
        link: function (scope, element, attrs) {
        }
   };
});