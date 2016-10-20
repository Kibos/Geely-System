/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.ruwangguanlia')
      .controller('constructionmanagementCtrl', constructionmanagementCtrl);

  /** @ngInject */
  function constructionmanagementCtrl($scope, $filter, editableOptions, editableThemes,$uibModal) {
     $scope.saveClick = function() {
      console.log("保存成功！");
      console.log($scope.tjfile)
    };

    $scope.users = [
      {
        "id": 1,
        "partner": "A集团",
        "newstore":"杭州吉利4S店",
        "design":"A设计厂商",
        "submitter":"小李",
        "time":"2016-10-08 07：00",
        "status": 1,
        "map":"待设计厂商提交"
      },
      {
        "id": 2,
        "partner": "B集团",
        "newstore":"杭州吉利4S店",
        "design":"A设计厂商",
        "submitter":"小李",
        "time":"2016-10-08 07：00",
        "status": 1,
        "map":"待设计厂商提交"
      },
      {
        "id": 3,
        "partner": "C集团",
        "newstore":"北京吉利4S店",
        "design":"A设计厂商",
        "submitter":"小张",
        "time":"2016-10-08 07：00",
        "status": 2,
        "map":"待设计厂商提交"
      },
      {
        "id": 4,
        "partner": "D集团",
        "newstore":"杭州吉利4S店",
        "design":"A设计厂商",
        "submitter":"小李",
        "time":"2016-10-08 07：00",
        "status": 2,
        "map":"待设计厂商提交"
      },
      {
        "id": 5,
        "partner": "E集团",
        "newstore":"杭州吉利4S店",
        "design":"A设计厂商",
        "submitter":"小和",
        "time":"2016-10-08 07：00",
        "status": 1,
        "map":"待设计厂商提交"
      },
      {
        "id": 6,
        "partner": "F集团",
        "newstore":"杭州吉利4S店",
        "design":"A设计厂商",
        "submitter":"小李",
        "time":"2016-10-08 07：00",
        "status": 1,
        "map":"待设计厂商提交"
      },
      {
        "id": 7,
        "partner": "G集团",
        "newstore":"北京吉利4S店",
        "design":"A设计厂商",
        "submitter":"小耿",
        "time":"2016-10-08 07：00",
        "status": 2,
        "map":"待设计厂商提交"
      },
      {
        "id": 8,
        "partner": "H集团",
        "newstore":"L品牌旗舰店",
        "design":"A设计厂商",
        "submitter":"小李",
        "time":"2016-10-08 07：00",
        "status": 2,
        "map":"待设计厂商提交"
      },
      {
        "id": 9,
        "partner": "I集团",
        "newstore":"北京吉利4S店",
        "design":"A设计厂商",
        "submitter":"小赵",
        "time":"2016-10-08 07：00",
        "status": 1,
        "map":"待设计厂商提交"
      },
      {
        "id": 10,
        "partner": "G集团",
        "newstore":"L品牌旗舰店",
        "design":"A设计厂商",
        "submitter":"小吴",
        "time":"2016-10-08 07：00",
        "status": 2,
        "map":"待设计厂商提交"
      }
    ];

    $scope.statuses = [
      {value: 1, text: '未审核'},
      {value: 2, text: '已通过审核'},
    ];

    $scope.showStatus = function(user) {
      var selected = [];
      if(user.status) {
        selected = $filter('filter')($scope.statuses, {value: user.status});
      }
      return selected.length ? selected[0].text : 'Not set';
    };


    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };

    $scope.addUser = function() {
      $scope.inserted = {
        id: $scope.users.length+1,
        name: '',
        status: null,
        group: null
      };
      $scope.users.push($scope.inserted);
    };

    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';

    $scope.weeks = [
      {
        stage: "阶段一",
        time: "2016.1.1~2016.3.1",
        work:"完成实地的勘探以及外墙建设，确保工程质量和进度",
        weeklys:[["第一周","第二周","第三周","第四周","第五周","第六周"]["aaaa","aaaa","aaaa","aaaa","aaaa","aaaa"]]
        // weeklys:[
        //   {firsts:
        //     [
        //       {step:"第一周",content:"aaaa"},
        //       {step:"第二周",content:"aaaa"},
        //       {step:"第三周",content:"aaaa"}
        //     ]
        //
        //   },
        //   {seconds:
        //     [
        //       {step:"第四周",content:"aaaa"},
        //       {step:"第五周",content:"aaaa"},
        //       {step:"第六周",content:"aaaa"}
        //     ]
        //
        //   }
        //
        // ]
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
