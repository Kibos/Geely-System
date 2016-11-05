/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.ruwangguanlia')
      .controller('constructionmanagementCtrl', constructionmanagementCtrl);

  /** @ngInject */
  function constructionmanagementCtrl($scope, $filter,$uibModal) {
     $scope.saveClick = function() {
      console.log("保存成功！");
      console.log($scope.tjfile)
    };
    $scope.reset = function() {
         $scope.agentcopy = angular.copy($scope.agent);
     };
    $scope.agent={
      name:'杭州吉利汽贸店',
      store:'杭州吉利4S店',
      design:'杭州设计院',
      person:'李莉',
      date:'',
      state:'未审核',
      file:'',
      page:''
    };

    $scope.submitClick = function() {
     console.log("施工图提交成功！");
   };

   $scope.cancelClick = function() {
    console.log("取消提交，施工图没有提交 ！");
     $scope.reset();
  };



    $scope.weeks = [
      {
        stage: "阶段一",
        time: "2016.1.1~2016.3.1",
        work:"完成实地的勘探以及外墙建设，确保工程质量和进度",
        weeklys:[["第一周","第二周","第三周","第四周","第五周","第六周"]["aaaa","aaaa","aaaa","aaaa","aaaa","aaaa"]]
      },
      {
        stage: "阶段二",
        time: "2016.1.1~2016.3.1",
        work:"完成实地的勘探以及外墙建设，确保工程质量和进度",
        weeklys:[
          {firsts:
            [
              {step:"第一周",content:"bbbb"},
              {step:"第二周",content:"aaaa"},
              {step:"第三周",content:"aaaa"}
            ]

          },
          {seconds:
            [
              {step:"第四周",content:"aaaa"},
              {step:"第五周",content:"aaaa"},
              {step:"第六周",content:"aaaa"}
            ]

          }

        ]
      },
      {
        stage: "阶段三",
        time: "2016.1.1~2016.3.1",
        work:"完成实地的勘探以及外墙建设，确保工程质量和进度",
        weeklys:[
          {firsts:
            [
              {step:"第一周",content:"aaaa"},
              {step:"第二周",content:"aaaa"},
              {step:"第三周",content:"aaaa"}
            ]

          },
          {seconds:
            [
              {step:"第四周",content:"aaaa"},
              {step:"第五周",content:"aaaa"},
              {step:"第六周",content:"aaaa"}
            ]

          }

        ]
      },
      {
        stage: "阶段四",
        time: "2016.1.1~2016.3.1",
        work:"完成实地的勘探以及外墙建设，确保工程质量和进度",
        weeklys:[
          {firsts:
            [
              {step:"第一周",content:"aaaa"},
              {step:"第二周",content:"aaaa"},
              {step:"第三周",content:"aaaa"}
            ]

          },
          {seconds:
            [
              {step:"第四周",content:"aaaa"},
              {step:"第五周",content:"aaaa"},
              {step:"第六周",content:"aaaa"}
            ]

          }

        ]
      }
    ];

    $scope.modelClick = function(){
      console.log("查看");

    };
    $scope.open = function (page, size) {
      $uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    };


  }
})();
