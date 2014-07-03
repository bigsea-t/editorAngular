'use strict';

/**
 * @ngdoc function
 * @name editorAngularApp.controller:EditorCtrl
 * @description
 * # EditorCtrl
 * Controller of the editorAngularApp
 */
angular.module('editorAngularApp')
  .controller('EditorCtrl', function ($scope,$sessionStorage) {

    //use session strorage
    $scope.$storage=$sessionStorage;

    $scope.$storage.draft=[];
    //whole article draft
    var draft=$scope.$storage.draft;

    function newItem(){
      var itemTemplate =
      {
        value:"edit me!",
        tag: "p",
        show:false,
        index:function(){
          return draft.indexOf(this);
        },
        html:function()
        {
          return '<'+this.tag+'>'+this.value+'</'+this.tag+'>';
        },
        append:function()
        {
          draft.splice(this.index(),0,newItem())
        }
      }
      return itemTemplate;
    }

    draft[0]=newItem();

    // draft[0]={};
    // draft[0].value="edit me"
    // draft[0].tag="p"
    // draft[0].parent=draft;
    // draft[0].index=0;
    // draft[0].html=function(){
    //   var html='<'+this.tag+'>'+this.value+'</'+this.tag+'>'
    //   return html
    // }
    // draft[0].append=function(){
    //   this.draft.splice(this.index,0,newItem  )

    // }


    // $scope is a special object that makes
    // its properties available to the view as
    // variables. Here we set some default values:

    $scope.showtooltip = true;

    // Some helper functions that will be
    // available in the angular declarations

    $scope.hideTooltip = function(){

      // When a model is changed, the view will be automatically
      // updated by by AngularJS. In this case it will hide the tooltip.

      draft.forEach(function(element,index,array){
        element.show=false;
      })
    }

    $scope.toggleTooltip = function(e){
      e.stopPropagation();
      $scope.showtooltip = !$scope.showtooltip;
    }
  });
