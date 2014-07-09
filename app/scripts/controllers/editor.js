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
    if(! $scope.$storage.article){
      $scope.$storage.article = {
        title:"",
        city:"",
        contents:[]
      };
    }

    if(! $scope.$storage.tools){
      $scope.$storage.tools = {
        link:{
          type:"link"
        },
        heading:{
          type:"heading"
        },
        paragraph:{
          type:"paragraph"
        }
      };
    };


    // var itemFuncs = {
    //   index:function(item){
    //     return draft.indexOf(item);
    //   },
    //   html:function(item){
    //     return '<'+item.tag+'>'+item.value+'</'+item.tag+'>';
    //     console.log(draft)
    //   },
    //   append:function(item){
    //     draft.splice(this.index(item)+1,0,newItem());
    //   },
    //   toggleTooltip:function(e,item){
    //     e.stopPropagation();
    //     item.showTooltip=!item.showTooltip;
    //   },
    //   delete:function(item){
    //     draft.splice(draft.indexOf(item),1);
    //   }
    // };

    $scope.format = {
      link: function(link){
        var html = '<a href = ' + link.url+ '>' + link.text +'</a>';
        return html;
      },
      heading: function(heading){
        var html = '<h3>' +heading.text + '</h3>'
        return html;
      },
      title: function(title){
        var html = '<h1>' +heading.text + '</h1>'
        return html;
      },
      paragraph: function(paragraph){
        var html = '<p>' +paragraph.text + '</p>'
        return html;
      }
    }


    var itemTemplate = {
      value:"edit me!",
      tag: "p",
      showTooltip:false
    }
    var cities = [
      "Ikebukuro",
      "Shibuya",
      "Shinjuku",
      "Yebisu",
      "Harajuku",
      "test"
    ]

    var tags = [
      {
        label:"title",
        value: "h1"
      },
      {
        label:"heading",
        value:"h2"
      },
      {
        label:"sub heading",
        value:"h3"
      },
      {
        label:"paragraph",
        value:"p"
      }
    ];

    $scope.tags = tags;
    $scope.cities = cities;

    // if(! $scope.$storage.draft){
    //   $scope.$storage.draft=[];
    //   $scope.$storage.draft[0]=newItem();
    // }

    //whole article draft
    var draft=$scope.$storage.draft;


    // $scope.itemFuncs=itemFuncs;



    // merge obj2 to obj1 -- the same attr is overwittern by obj2
    function merge(obj1, obj2) {
      var obj3 = {};
      for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
      for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
      return obj3;
    }

    $scope.clone = function(obj){
      return merge(obj,{});
    }

  });
