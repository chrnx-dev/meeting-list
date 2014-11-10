'use strict';

var Template = '<div class="player-wrap">\
    <div class="player row">\
      <div class="col-sm-2 player-avatar">\
        <img class="img-circle" gravatar-src="\'{{developer.email}}\'" gravatar-size="69">\
      </div>\
      <div class="col-sm-10 player-info">\
        <h6>{{developer.name}}</h6>\
        <div class="player-stats">\
          <div class="col-sm-6 player-probability">Probability <span>{{developer.p}}</span></div>\
          <div class="col-sm-6 player-handicap">Handicap </div>\
        </div>\
      </div>\
    </div>\
  </div>';

angular.module('game').directive('developer', [

  function() {

    return {
      restrict: 'E',
      scope: {
        developer: '='
      },
      template: Template,
      link: function(scope, el, attr) {


      }
    };
  }
]);