/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.ruwangguanlia')
      .controller('InfoCtrl', InfoCtrl);

  /** @ngInject */
  function InfoCtrl($scope, Shop, Auth, Audit, $upload, $timeout, filesUrl)
  {
    // 二级联动开始/////////////////////////////////////////////////////

    // 二级联动结束
    $scope.agent={};
    // console.log('info-start');
    $scope.currentUser = Auth.getCurrentUser();
    console.log('$scope.currentUser');

    console.log($scope.currentUser);
// <<<<<<< HEAD
    // 保存提示
    function getShop() {
      Shop.getShopsByuserId.get({id:$scope.currentUser._id},function(data){
          console.log(data);
          $scope.shop = data;

          // console.log(data);
          $scope._dbid = data._id;
          $scope.verifyDataSubmitting = data.verifyDataSubmitting;
          $scope._data = data;
          if($scope._data.verifyDataSubmitting && $scope._data.shenheshibaiFlag!==true) {
            $scope.show="check1";
          }
          if($scope._data.isVerify){
            $scope.show="check2";
          }
          if($scope._data.shenheshibaiFlag) {
            $scope.show="check3";
            $scope.notInfo = data.applyId.verifyHistory[data.applyId.verifyHistory.length-1].opinion;
          }
          $scope.btnFlag = $scope.verifyDataSubmitting;
          ////////////////////////////////表格信息处理/////////////////////////////////////////////////////////////////////////
          // 股份构成
          $scope.SharesConstitute=data.SharesConstitute?data.SharesConstitute:[];
          // 关键人员背景
          $scope.users=data.users?data.users:[];
          // 财务报表
          $scope.financeStatusTable=data.financeStatusTable?data.financeStatusTable:[];
          // 汽车销售领域
          $scope.carShareholder=data.carShareholder?data.carShareholder:[];
          // 非汽车销售领域
          $scope.notcarShareholder=data.notcarShareholder?data.notcarShareholder:[];
          // 销售维修状况
          $scope.maintenance=data.maintenance?data.maintenance:[];
           // 建店城市商圈
          $scope.BSbusinessArea=data.BSbusinessArea?data.BSbusinessArea:[];
          // 建店场地相关资料
          $scope.BSSdatum=data.BSSdatum?data.BSSdatum:[];
          // 店面建设计划
          $scope.StoreConstructionPlan=data.StoreConstructionPlan?data.StoreConstructionPlan:[];
          // 关键岗位组建筹备
          $scope.keyJob=data.keyJob?data.keyJob:[];
          // 新公司股权结构
          $scope.newEquityStructure=data.newEquityStructure?data.newEquityStructure:[];
          // 资信情况
          $scope.nowBankDeposit=data.nowBankDeposit?data.nowBankDeposit:[];



          //获取数据库中是否存有相关信息的标示
          // 基本信息

          if (data.basic){
             $scope._dbid = data._id;
              $scope.agent.companyName=data.basic.companyName?data.basic.companyName:'';
              $scope.saveSuccess = false;

              $scope.agent.carBrand= data.basic.carBrand?data.basic.carBrand:'';
              $scope.agent.nature= data.basic.nature?data.basic.nature:'';
              $scope.agent.establishDate= data.basic.establishDate?data.basic.establishDate:'';
              $scope.agent.registerCapital= data.basic.registerCapital?data.basic.registerCapital:'';
              $scope.agent.shopNumber= data.basic.shopNumber?data.basic.shopNumber:'';
              $scope.agent.sellSuffer= data.basic.sellSuffer?data.basic.sellSuffer:'';
              $scope.agent.afterSale= data.basic.afterSale?data.basic.afterSale:'';
              $scope.agent.legalRepresentative=data.basic.legalRepresentative?data.basic.legalRepresentative:'';
          };





          // 资信情况
          if (data.CSmessage){
              $scope.agent.qualityRating=data.CSmessage.qualityRating?data.CSmessage.qualityRating:'';
              $scope.agent.XYDJPJbank=data.CSmessage.XYDJPJbank?data.CSmessage.XYDJPJbank:'';
              // console.log("资信情况数据获取")
              // $scope.agent.nowBank=data.CSmessage.nowBank?data.CSmessage.nowBank:[];
              // $scope.nowBankDeposit=$scope.agent.nowBank;
          }


          // 建店场地情况
          if (data.bss){
              $scope.item.city.cn=data.bss.tradeArea?data.bss.tradeArea:'';
              $scope.agent.address=data.bss.address?data.bss.address:'';
              $scope.agent.locations=data.bss.locations?data.bss.locations:'';
              $scope.agent.businessName=data.bss.businessName?data.bss.businessName:'';
              $scope.agent.formationTime=data.bss.formationTime?data.bss.formationTime:'';
              $scope.agent.scaleRanked=data.bss.scaleRanked?data.bss.scaleRanked:'';
              $scope.agent.brandNum=data.bss.brandNum?data.bss.brandNum:'';
              $scope.agent.brandDetail=data.bss.brandDetail?data.bss.brandDetail:'';
              $scope.agent.landSources=data.bss.landSources?data.bss.landSources:'';
              $scope.agent.landStatus=data.bss.landStatus?data.bss.landStatus:'';
              $scope.agent.leaseStart=data.bss.leaseStart?data.bss.leaseStart:'';
              $scope.agent.leaseEnd=data.bss.leaseEnd?data.bss.leaseEnd:'';
              $scope.agent.firstshopone=data.bss.firstshopone?data.bss.firstshopone:false;
              $scope.agent.firstshoptwo=data.bss.firstshoptwo?data.bss.firstshoptwo:false;
              $scope.agent.firstshopthree=data.bss.firstshopthree?data.bss.firstshopthree:false;
              $scope.agent.firstshopfour=data.bss.firstshopfour?data.bss.firstshopfour:false;
              $scope.agent.notfirstShopone=data.bss.notfirstShopone?data.bss.notfirstShopone:false;
              $scope.agent.notfirstShoptwo=data.bss.notfirstShoptwo?data.bss.notfirstShoptwo:false;
              $scope.agent.notfirstShopthree=data.bss.notfirstShopthree?data.bss.notfirstShopthree:false;
              $scope.agent.notfirstShopfour=data.bss.notfirstShopfour?data.bss.notfirstShopfour:false;
              $scope.agent.notfirstShopfive=data.bss.notfirstShopfive?data.bss.notfirstShopfive:false;
              $scope.agent.jsMode=data.bss.jsMode?data.bss.jsMode:'';
              $scope.agent.sqGrade=data.bss.sqGrade?data.bss.sqGrade:'';
              $scope.agent.constructionStart=data.bss.constructionStart?data.bss.constructionStart:'';
              $scope.agent.constructionEnd=data.bss.constructionEnd?data.bss.constructionEnd:'';
              $scope.agent.soilArea=data.bss.soilArea?data.bss.soilArea:'';
              $scope.agent.soilWidth=data.bss.soilWidth?data.bss.soilWidth:'';
              $scope.agent.soilDepth=data.bss.soilDepth?data.bss.soilDepth:'';
              $scope.agent.buildArea=data.bss.buildArea?data.bss.buildArea:'';
              $scope.agent.buildWidth=data.bss.buildWidth?data.bss.buildWidth:'';
              $scope.agent.buildDepth=data.bss.buildDepth?data.bss.buildDepth:'';
              $scope.agent.overallHeight=data.bss.overallHeight?data.bss.overallHeight:'';
              $scope.agent.showcaseHeight=data.bss.showcaseHeight?data.bss.showcaseHeight:'';
              $scope.agent.afterSaleBuildArea=data.bss.afterSaleBuildArea?data.bss.afterSaleBuildArea:'';
          };


          // 新公司筹备
          if (data.newCP){
              $scope.agent.LPstatus=data.newCP.LPstatus?data.newCP.LPstatus:'';
              $scope.agent.companyName=data.newCP.companyName?data.newCP.companyName:'';
              $scope.agent.registeredAddress=data.newCP.registeredAddress?data.newCP.registeredAddress:'';
              $scope.agent.corporateProperty=data.newCP.corporateProperty?data.newCP.corporateProperty:'';
              $scope.agent.MaintenanceQualification=data.newCP.MaintenanceQualification?data.newCP.MaintenanceQualification:'';
              $scope.agent.registrationTime=data.newCP.registrationTime?data.newCP.registrationTime:'';
              $scope.agent.rirmRegisteredAddress=data.newCP.rirmRegisteredAddress?data.newCP.rirmRegisteredAddress:'';
          };

          // 资金筹备
          if (data.fundings){

                  console.log(data.fundings);
                  $scope.agent.fixationOwnSum=data.fundings.fixationOwnSum?data.fundings.fixationOwnSum:'';
                  $scope.agent.fixationOwnArriveTime=data.fundings.fixationOwnArriveTime?data.fundings.fixationOwnArriveTime:'';
                  $scope.agent.fixationOwnRemark=data.fundings.fixationOwnRemark?data.fundings.fixationOwnRemark:'';
                  $scope.agent.fixationloanSum=data.fundings.fixationloanSum?data.fundings.fixationloanSum:'';
                  $scope.agent.fixationloanArriveTime=data.fundings.fixationloanArriveTime?data.fundings.fixationloanArriveTime:'';
                  $scope.agent.fixationloanRemark=data.fundings.fixationloanRemark?data.fundings.fixationloanRemark:'';
                  $scope.agent.fixationrestSum=data.fundings.fixationrestSum?data.fundings.fixationrestSum:'';
                  $scope.agent.fixationrestArriveTime=data.fundings.fixationrestArriveTime?data.fundings.fixationrestArriveTime:'';
                  $scope.agent.fixationrestRemark=data.fundings.fixationrestRemark?data.fundings.fixationrestRemark:'';


                  $scope.agent.streamownSum=data.fundings.streamownSum?data.fundings.streamownSum:'';
                  $scope.agent.streamownArriveTime=data.fundings.streamownArriveTime?data.fundings.streamownArriveTime:'';
                  $scope.agent.streamownRemark=data.fundings.streamownRemark?data.fundings.streamownRemark:'';
                  $scope.agent.streamloanSum=data.fundings.streamloanSum?data.fundings.streamloanSum:'';
                  $scope.agent.streamloanArriveTime=data.fundings.streamloanArriveTime?data.fundings.streamloanArriveTime:'';
                  $scope.agent.streamloanRemark=data.fundings.streamloanRemark?data.fundings.streamloanRemark:'';
                  $scope.agent.streamrestSum=data.fundings.streamrestSum?data.fundings.streamrestSum:'';
                  $scope.agent.streamrestArriveTime=data.fundings.streamrestArriveTime?data.fundings.streamrestArriveTime:'';
                  $scope.agent.streamrestRemark=data.fundings.streamrestRemark?data.fundings.streamrestRemark:'';


                  $scope.agent.cashDepositSum=data.fundings.cashDepositSum?data.fundings.cashDepositSum:'';
                  $scope.agent.cashDepositArriveTime=data.fundings.cashDepositArriveTime?data.fundings.cashDepositArriveTime:'';
                  $scope.agent.cashDepositRemark=data.fundings.cashDepositRemark?data.fundings.cashDepositRemark:'';


                  $scope.agent.mentionModelsSum=data.fundings.mentionModelsSum?data.fundings.mentionModelsSum:'';
                  $scope.agent.mentionModelsArriveTime=data.fundings.mentionModelsArriveTime?data.fundings.mentionModelsArriveTime:'';
                  $scope.agent.mentionModelsRemark=data.fundings.mentionModelsRemark?data.fundings.mentionModelsRemark:'';

          };

          // 组建架构筹备
          // 营销预测分析
          if (data.MFAform){
              $scope.agent.salesTarget=data.MFAform.salesTarget?data.MFAform.salesTarget:'';
              $scope.agent.forecastOne=data.MFAform.forecastOne?data.MFAform.forecastOne:'';
              $scope.agent.forecastTwo=data.MFAform.forecastTwo?data.MFAform.forecastTwo:'';
              $scope.agent.marketingAnalysis=data.MFAform.marketingAnalysis?data.MFAform.marketingAnalysis:'';
          };


      })
    }

    getShop()

// =======
//   $scope.NewShopId = $scope.currentUser.shop.id
// >>>>>>> d2b9570892c8a358ce62c9f62eff0218a295d875

    $scope.shop = {}

    var shop = {}
    // 审核确认提示
    $scope.masklayer=false;
    // 审核确认信息按钮
     $scope.toolTip=function(start)
    {
      if (start=='affirm')
      {
        if ($scope.shop.shenheshibaiFlag === false)
        {
          console.log('verifyDataSubmitting');
          Audit.verifyDataSubmitting.save({shopId:$scope._dbid},function () {
              $scope.verifyDataSubmitting = true;
              $scope.saveSuccess = true;

              $scope.show="check1";
          })
        }
        else{
          console.log('reVerifyDataSub');
          Audit.reVerifyDataSub.save({shopId:$scope._dbid},function () {
              $scope.verifyDataSubmitting = true;
              $scope.show="check1";
              $scope.saveSuccess = true;

          })

        }
      }else{
        $scope.masklayer=false;
        return;
      }
      $scope.masklayer=false;

    }
    $scope.verifyDataSubmittingBtn=function(){
      $scope.masklayer=true;
    }



    $scope.someinfo = 'info';
    // 审核状态
    $scope.saveSuccess = true;

    $scope.show="check0";

    // 表单状态
    // $scope.state=false;

    $scope.btn="btn1";
    // 表格切换
    $scope.tabone=function(hit){
      $scope.btn=hit;
      console.log($scope.username123);
      if($scope.btn==hit){
           // $scope.userform.$cancel();
      };
    };
// ///////////////////表格信息验证/////////////////////////////////////////////
  // 表格不为空
  $scope.checkNull=function(data){
    if (data==""){
      return "表格信息不为空";
    }
  }
  // 大于0的数字
  $scope.checkExceedzero=function(data){
    if (!/^[1-9]\d*(\.\d+)?$/.test(data)){
      return "请输入大于0的数字";
    }
  }
  // 百分比验证
  $scope.checkPercent=function(data){
    if (!/^([1-9]\d?(\.\d{1,2})?|0.\d{1,2}|100)$/.test(data)){
      return "输入百分比(0~100之间不加百分号)";
    }
  }
  // 手机号码验证
  $scope.checkphone=function(data){
    if (!/^1[3,5,8]\d{9}$/.test(data)){
      return "请输入有效的手机号码";
    }
  }
  // 邮箱格式验证
  $scope.checkEmail=function(data){
    if (!/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(data)){
      return "请输入有效的邮箱格式";
    }
  }
  // 正整数
  $scope.checkInteger=function(data){
    if (!/^[0-9]*[1-9][0-9]*$/.test(data)){
      return "请输入正整数";
    }
  }
  //
  $scope.checkdata=function(data){
    if (!/^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/.test(data)){
      return "请输入正确的日期格式:yyyy/mm/dd"
    }
  }


// ----------------------代理商简述------------------------------
    // 基本信息
    Shop.getBasic($scope.NewShopId,function (res) {
      console.log('基本信息')
      console.log(res);
      $scope.agent = res.data;
          // if (data.basic){
          //     $scope.agent.companyName=data.basic.companyName?data.basic.companyName:'';
          //     $scope.saveSuccess = false;
          //
          //     $scope.agent.carBrand= data.basic.carBrand?data.basic.carBrand:'';
          //     $scope.agent.nature= data.basic.nature?data.basic.nature:'';
          //     $scope.agent.establishDate= data.basic.establishDate?data.basic.establishDate:'';
          //     $scope.agent.registerCapital= data.basic.registerCapital?data.basic.registerCapital:'';
          //     $scope.agent.shopNumber= data.basic.shopNumber?data.basic.shopNumber:'';
          //     $scope.agent.sellSuffer= data.basic.sellSuffer?data.basic.sellSuffer:'';
          //     $scope.agent.afterSale= data.basic.afterSale?data.basic.afterSale:'';
          //     $scope.agent.legalRepresentative=data.basic.legalRepresentative?data.basic.legalRepresentative:'';
          // };
    })
    $scope.basicInformation=function(BasicForm)
    {
    	$scope.submitbasic = true;
      if (BasicForm.$valid){
        $scope.basic = {
        companyName: $scope.agent.companyName,
        carBrand: $scope.agent.carBrand,
        nature: $scope.agent.nature,
        establishDate: $scope.agent.establishDate,
        registerCapital: $scope.agent.registerCapital,
        shopNumber: $scope.agent.shopNumber,
        sellSuffer: $scope.agent.sellSuffer,
        afterSale: $scope.agent.afterSale,
        legalRepresentative:$scope.agent.legalRepresentative
      };

      // var a = {
      //   basic:$scope.basic
      // };
      // saveInfoFixFuntion(a);

      $scope.basic.shopid = $scope.NewShopId
      Shop.saveBasic.save($scope.basic,function (response) {
        console.log(response);
        $scope.saveSuccess = false;

      })
    }
    console.log("代理商简述基本信息");
    console.log($scope.basic);


    }

    // 股份构成


    Shop.getSharesconstituteByShopId($scope.NewShopId,function (res) {
      $scope.SharesConstitute = res.data;
    })
    $scope.removeSharesConstitute = function(index,item){
      $scope.SharesConstitute.splice(index, 1);
      console.log(item)
      Shop.deleteSharesconstitute(item.id,function(res){
        console.log(res)
      })
    };
    $scope.addSharesConstitute = function() {
      $scope.insertedgfgc = {
        stockholder:"",
        fundingsum:"",
        fundingratio:"",
        stockholderquale:""
      };
      var test = JSON.parse(JSON.stringify($scope.insertedgfgc));
      $scope.SharesConstitute.push(test);
    };
    $scope.saveTableA=function(){
      // var b={
      //   SharesConstitute:$scope.SharesConstitute
      // }
      // saveInfoFixFuntion(b);
      console.log($scope.SharesConstitute)


        // $scope.SharesConstitute[0].shopid = $scope.NewShopId;

        // Shop.saveSharesconstitute.save($scope.SharesConstitute[0],function(res){
        //   console.log('res')
        //   console.log(res)

        // })
      for(var i = 0; i<$scope.SharesConstitute.length;i++ ){
        console.log($scope.SharesConstitute[i])
        $scope.SharesConstitute[i].shopid = $scope.NewShopId;

        Shop.saveSharesconstitute.save($scope.SharesConstitute[i],function(res){
          console.log('res')
          console.log(res)

        })
      }

    }
    $scope.tableVerify=false;

    // 关键人员背景
    // $scope.users=[];
    //1
    Shop.getPeopleinfoByShopId($scope.NewShopId,function (res) {
      $scope.users = res.data;
      console.log($scope.users)
    })
    //
    $scope.removeUser = function(index,item) {
      $scope.users.splice(index, 1);
      //2
      Shop.deletePeopleinfo(item.id,function(res){
        console.log(res)
      })
      //
    };
    $scope.addUser = function() {
      $scope.insertedgjrybj = {
        id: $scope.users.length+1,
        name: '',
        city:'',
        duty:'',
        cellphone:null,
        email:'',
        shark:''
      };
      var testTwo = JSON.parse(JSON.stringify($scope.insertedgjrybj));
      $scope.users.push(testTwo);
    };
    $scope.saveTableC=function(){
      // var c={
      //   users:$scope.users
      // };
      // saveInfoFixFuntion(c);
      // Shop.savePeopleinfo()

      //3
    for(var i = 0; i<$scope.users.length;i++ ){
        $scope.users[i].shopid = $scope.NewShopId;

        Shop.savePeopleinfo.save($scope.users[i],function(res){
          console.log('res')
          console.log(res)

        })
      }
    }
    // 股份股东投资情况
    /*$scope.investment=function(InvestForm){

    }*/
    // 汽车销售领域
    //1
    Shop.getCarshareholderByShopId($scope.NewShopId,function (res) {
      console.log('汽车销售领域');
      console.log(res.data);
      $scope.carShareholder = res.data;
    })
    $scope.delShareholder = function(index,item) {
      $scope.carShareholder.splice(index, 1);
      //2
      Shop.deleteCarshareholder(item.id,function(res){
        console.log(res)
      })
    };
    $scope.addcarShareholder= function(){
      $scope.insertedgdqcxslythree= {
        firmname:'',
        shark:'',
        dates:'',
        brand:'',
        genre:'',
        address:'',
        status:''
      };
      var testthree=JSON.parse(JSON.stringify($scope.insertedgdqcxslythree))
      $scope.carShareholder.push(testthree);
    }
    $scope.saveTableDa=function(){
      // var da={
      //   carShareholder:$scope.carShareholder
      // }
      // saveInfoFixFuntion(da);

      //3
      console.log($scope.carShareholder);
    for(var i = 0; i<$scope.carShareholder.length;i++ ){
        $scope.carShareholder[i].shopid = $scope.NewShopId;

        Shop.saveCarshareholder.save($scope.carShareholder[i],function(res){
          console.log('res')
          console.log(res)

        })
      }
    }

    // 非汽车销售领域
    // $scope.notcarShareholder=[

    // ]
    Shop.getNotcarshareholderByShopId($scope.NewShopId,function (res) {
      console.log('非汽车销售领域');
      console.log(res);
      $scope.notcarShareholder = res.data;
    })

    $scope.delnotShareholder = function(index,item) {
      $scope.notcarShareholder.splice(index, 1);
    //2
    Shop.deleteNotcarshareholder(item.id,function(res){
      console.log(res)
    })
  };
    $scope.addnotcarShareholder= function() {
      $scope.insertedfourgdfqcxs= {
        firmname: '',
        shark:'',
        mainbusiness:'',
        income:null,
        profit:''
      };
      var testfour = JSON.parse(JSON.stringify($scope.insertedfourgdfqcxs));
      $scope.notcarShareholder.push(testfour);
    }
    $scope.saveTableDb=function(){
      // var db={
      //   notcarShareholder:$scope.notcarShareholder
      // };
      // saveInfoFixFuntion(db);
      console.log('非汽车销售领域')
      console.log($scope.notcarShareholder);
    for(var i = 0; i<$scope.notcarShareholder.length;i++ ){
        $scope.notcarShareholder[i].shopid = $scope.NewShopId;

        Shop.saveNotcarshareholder.save($scope.notcarShareholder[i],function(res){
          console.log('res')
          console.log(res)

        })
      }
    }
// 销售维修状况
    Shop.getMaintenanceByShopId($scope.NewShopId,function (res) {
      $scope.maintenance = res.data;
      console.log($scope.users)
    })
    $scope.delmaintenance = function(index,item) {
      $scope.maintenance.splice(index, 1);
    //2
    Shop.deleteMaintenance(item.id,function(res){
      console.log(res)
    })
  };
    $scope.addmaintenance= function() {
      $scope.insertedxswxqkthree= {
            COHR:'',
            brand:'',
            fourteen:{
                salesVolume:'',
                marketShare:'',
                several:null
            },
            fifteen:{
                salesVolume:'',
                marketShare:'',
                several:null
            },
            sixteen:{
                salesVolume:'',
                marketShare:'',
                several:null
            }
      };
      var testfive = JSON.parse(JSON.stringify($scope.insertedxswxqkthree));
      $scope.maintenance.push(testfive);
    }
    $scope.saveTableE=function(){
      // var da={
      //   carShareholder:$scope.carShareholder
      // }
      // saveInfoFixFuntion(da);

      //3
      console.log('销售维修状况')
      console.log($scope.maintenance);
    for(var i = 0; i<$scope.maintenance.length;i++ ){
        $scope.maintenance[i].shopid = $scope.NewShopId;

        Shop.saveMaintenance.save($scope.maintenance[i],function(res){
          console.log('res')
          console.log(res)

        })
      }
    }

    // 财务报表
    //1
    Shop.getFinancestatustableByShopId($scope.NewShopId,function (res) {
      $scope.financeStatusTable = res.data;
      console.log($scope.financeStatusTable)
    })
    $scope.delfinanceStatusTable = function(index,item) {
      $scope.financeStatusTable.splice(index, 1);
    //2
    Shop.deleteFinancestatustable(item.id,function(res){
      console.log(res)
    })
  };
    $scope.addfinanceStatusTable= function() {
      $scope.insertedcwbb= {
            year:'',
            asset:'',
            debt:'',
            netmargin:'',
            netprofit:''
      };
      var testsix = JSON.parse(JSON.stringify($scope.insertedcwbb));
      $scope.financeStatusTable.push(testsix);
    }
    $scope.saveTableFa=function(){
      // var da={
      //   carShareholder:$scope.carShareholder
      // }
      // saveInfoFixFuntion(da);

      //3
      console.log('财务报表')
    for(var i = 0; i<$scope.financeStatusTable.length;i++ ){
        $scope.financeStatusTable[i].shopid = $scope.NewShopId;

        Shop.saveFinancestatustable.save($scope.financeStatusTable[i],function(res){
          console.log('res')
          console.log(res)

        })
      }
    }


 // 资信状况
    Shop.getCsmessageByShopId( $scope.NewShopId, function(res){
      console.log('资信状况');
      console.log(res)
      $scope.agent.qualityrating = res.data.qualityrating;
      $scope.agent.xydjpjbank = res.data.xydjpjbank;

    })
    $scope.creditStatus=function(CSMessageForm)
    {
      console.log('资信状况')
        $scope.submitcreditStatus = true;
        if (CSMessageForm.$valid)
        {
          $scope.CSmessage={
           qualityrating: $scope.agent.qualityrating,
           xydjpjbank: $scope.agent.xydjpjbank
          };
        //   var fc={
        //     CSmessage:$scope.CSmessage
        //   };
        //   saveInfoFixFuntion(fc);
        // }
  //       {
  //   "qualityrating": "2",
  //   "xydjpjbank": "1",
  //   "shopid": 1
  // }
        $scope.CSmessage.shopid= $scope.NewShopId;
        console.log($scope.CSmessage)
        Shop.saveCsmessage.save($scope.CSmessage,function (params) {
          console.log(params)
        })
        }

    }
    // $scope.nowBankDeposit=[];

    //yin hang cun kuan
    Shop.getNowbankdepositidByShopId($scope.NewShopId,function (res) {
      console.log('inhang cun kuan ~~~');
      $scope.nowBankDeposit = res.data;
    })
    $scope.delnowBankDeposit = function(index,item) {
      $scope.nowBankDeposit.splice(index,1);
      Shop.deleteNowbankdepositid(item.id,function(res){
        console.log(res)
      })
    };
    $scope.addnowBankDeposit= function() {
      $scope.insertedzxqk={
           bank:"",
            sum:"",
            adjunct:""
      };
      var testseven = JSON.parse(JSON.stringify($scope.insertedzxqk));
      $scope.nowBankDeposit.push(testseven);
    }
    $scope.saveTableFb=function(){
      // var fb={
      //   nowBankDeposit:$scope.nowBankDeposit
      // };
      // saveInfoFixFuntion(fb);
      for(var i = 0; i<$scope.nowBankDeposit.length;i++ ){
          $scope.nowBankDeposit[i].shopid = $scope.NewShopId;

          Shop.saveNowbankdepositid.save($scope.nowBankDeposit[i],function(res){
            console.log('res')
            console.log(res)

          })
        }
    }



    // ---------------------拟建店简述------------------------
    $scope.btn2="btn21";
    $scope.locations=[
        {id:"汽车城、汽车交易市场","text":"汽车城、汽车交易市场"},
        {id:"汽车交易一条街","text":"汽车交易一条街"},
        {id:"主干道","text":"主干道"},
        {id:"其他","text":"其他"}
    ];
    $scope.landsources=[
        {id:"已购买","text":"已购买"},
        {id:"已租赁","text":"已租赁"},
        {id:"意向购买","text":"意向购买"},
        {id:"意向租赁","text":"意向租赁"},
        {id:"其它","text":"其它"}
    ]
    // 建店场地情况
    $scope.item = {
    city: ["北京", "北京市", "西城区"]
    };
    Shop.getBss($scope.NewShopId,function(res){
      console.log('建店场地情况')
      console.log(res)
      // res = {"code":"OK","message":null,"url":null,"data":

      $scope.buildForm = res.data;
      console.log($scope.item);
      console.log(res.data.tradeareas);

      $scope.item.city =res.data.tradeareas;

    })

    $scope.buildStoreSite=function(bssForm)
    {
        $scope.submitbss = true;
        console.log("省市联动");
        console.log($scope.item);
        console.log($scope.item.city);
        console.log($scope.item.city.join());
        // ['beijing','beijing','beijij']
        if (bssForm.$valid){
            $scope.bss = {
            tradearea: $scope.item.city.join(),
            address: $scope.buildForm.address,
            locations: $scope.buildForm.locations,
            businessname: $scope.buildForm.businessname,
            formationtime: $scope.buildForm.formationtime,
            scaleranked: $scope.buildForm.scaleranked,
            brandnum: $scope.buildForm.brandnum,
            branddetail: $scope.buildForm.branddetail,
            landsources: $scope.buildForm.landsources,
            landstatus: $scope.buildForm.landstatus,
            leasestart: $scope.buildForm.leasestart,
            leaseend: $scope.buildForm.leaseend,
            firstshopone: $scope.buildForm.firstshopone,
            firstshoptwo: $scope.buildForm.firstshoptwo,
            firstshopthree: $scope.buildForm.firstshopthree,
            firstshopfour: $scope.buildForm.firstshopfour,
            notfirstshopone:$scope.buildForm.notfirstshopone,
            notfirstshoptwo:$scope.buildForm.notfirstshoptwo,
            notfirstshopthree:$scope.buildForm.notfirstshopthree,
            notfirstshopfour:$scope.buildForm.notfirstshopfour,
            notfirstshopfive:$scope.buildForm.notfirstshopfive,
            jsmode: $scope.buildForm.jsmode,
            sqgrade: $scope.buildForm.sqgrade,
            constructionstart: $scope.buildForm.constructionstart,
            constructionend: $scope.buildForm.constructionend,
            soilarea: $scope.buildForm.soilarea,
            soilwidth: $scope.buildForm.soilwidth,
            soildepth: $scope.buildForm.soildepth,
            buildarea: $scope.buildForm.buildarea,
            buildwidth: $scope.buildForm.buildwidth,
            builddepth: $scope.buildForm.builddepth,
            overallheight: $scope.buildForm.overallheight,
            showcaseheight: $scope.buildForm.showcaseheight,
            aftersalebuildarea: $scope.buildForm.aftersalebuildarea
          }
          // var g={
          //   bss:$scope.bss
          // };
          // saveInfoFixFuntion(g);
          $scope.bss.shopid=$scope.NewShopId
          console.log($scope.bss)
          Shop.saveBss.save($scope.bss,function(res){
            console.log(res);
          })
        }

        console.log($scope.bss);
    }
    // 建店城市商圈
    Shop.getbusinessarea($scope.NewShopId,function (res) {
      console.log('建店城市商圈')

      $scope.BSbusinessArea = res.data;
      console.log($scope.BSbusinessArea)
    })
    $scope.delBSbusinessArea = function(index,item) {
      $scope.BSbusinessArea.splice(index, 1);
    //2
    Shop.deletebusinessarea(item.id,function(res){
      console.log(res)
    })
  };
    $scope.addBSbusinessArea= function() {
      $scope.insertedjdcssq= {
        proposed:false,
        market:'',
        distance:'',
        limousinebrand:"",
        otherbrand:""
      };
      var testeight=JSON.parse(JSON.stringify($scope.insertedjdcssq));
      $scope.BSbusinessArea.push(testeight);
    };
    $scope.saveTableH=function(){
      // var h={
      //   BSbusinessArea:$scope.BSbusinessArea
      // };
      // saveInfoFixFuntion(h);
          for(var i = 0; i<$scope.BSbusinessArea.length;i++ ){
        $scope.BSbusinessArea[i].shopid = $scope.NewShopId;

        Shop.addbusinessarea.save($scope.BSbusinessArea[i],function(res){
          console.log('res')
          console.log(res)

        })
      }
    }
    // 建店场地相关资料
    $scope.btn23="btn231";
    $scope.BuiltShopSiteTable=function(BSSdatumForm){
        $scope.submitBSSD = true;
        $scope.BSSdatum={
            tradeArea:$scope.agent.tradeArea
        }
        console.log("相关附件上传start");
        console.log($scope.BSSdatum);
        console.log("相关附件end");
    }
// ----------------------拟建店筹备-------------------------------
    // 新公司筹备
    $scope.btn3="btn31";
    $scope.MQ=[
        {id:"一类","text":"一类"},
        {id:"二类","text":"二类"},
        {id:"三类","text":"三类"}
    ];
    $scope.EN=[
        {id:"国有","text":"国有"},
        {id:"集体","text":"集体"}
    ];
    $scope.xingongsi= {}
    Shop.getprepareCompany($scope.NewShopId,function (res) {
      console.log('新公司筹备');
      console.log(res);

      $scope.xingongsi = res.data;
      console.log($scope.newCP);
      console.log('~~~~');
    })
    $scope.newCompanyPrepare=function(newCPForm)
    {
        $scope.submitnewCP = true;
        console.log($scope.xingongsi);
        if (newCPForm.$valid){
          $scope.newCP={
            lpstatus: $scope.xingongsi.lpstatus,
            companyname: $scope.xingongsi.companyname,
            registeredaddress: $scope.xingongsi.registeredaddress,
            corporateproperty: $scope.xingongsi.corporateproperty,
            maintenancequalification: $scope.xingongsi.maintenancequalification,
            registrationtime: $scope.xingongsi.registrationtime,
            rirmregisteredaddress: $scope.xingongsi.rirmregisteredaddress
          }
          // var i={
          //   newCP:$scope.newCP
          // };
          // saveInfoFixFuntion(i);
          console.log('新公司筹备')
          console.log($scope.newCP);
          $scope.newCP.shopid = $scope.NewShopId;
          Shop.addPrepareCompany.save($scope.newCP,function(res){
            console.log(res)
          })
        }

        console.log($scope.newCP);
    }
    // 新公司股权结构
  Shop.getprepareConstruct($scope.NewShopId,function (res) {
    console.log('新公司股权结构')
    console.log(res);
    $scope.newEquityStructure = res.data;
    console.log(res)
  })
    $scope.delnewEquityStructure = function(index,item) {
      $scope.newEquityStructure.splice(index, 1);
      Shop.deprepareConstruct(item.id,function(res){
        console.log(res)
      })
    };
    $scope.addnewEquityStructure = function() {
      $scope.insertedxgsgqjg= {
        shareholder:"",
        affiliation:"",
        fundingsum:'',
        fundingscale:'',
        nature:""
      };
      var testnice = JSON.parse(JSON.stringify($scope.insertedxgsgqjg));
      $scope.newEquityStructure.push(testnice);
    }
    $scope.saveTableJ=function(){
      // var j={
      //   newEquityStructure:$scope.newEquityStructure
      // };
      // saveInfoFixFuntion(j);

      for(var i = 0; i<$scope.newEquityStructure.length;i++ ){
        $scope.newEquityStructure[i].shopid = $scope.NewShopId;

        Shop.addprepareConstruct.save($scope.newEquityStructure[i],function(res){
          console.log('res')
          console.log(res)

        })
      }
    }
    // 资金筹备
    Shop.getprepareFinance($scope.NewShopId,function(res){
      console.log('资金筹备');
      $scope.zijinchoubei = res.data;
      console.log(res)

    })
    $scope.funding=function(fundingForm){
        $scope.submitfunding=true;
        if (fundingForm.$valid)
        {
          $scope.fundings={

                fixationownsum:$scope.zijinchoubei.fixationownsum,
                fixationownarrivetime:$scope.zijinchoubei.fixationownarrivetime,
                fixationownremark:$scope.zijinchoubei.fixationownremark,
                fixationloansum:$scope.zijinchoubei.fixationloansum,
                fixationloanarrivetime:$scope.zijinchoubei.fixationloanarrivetime,
                fixationloanremark:$scope.zijinchoubei.fixationloanremark,
                fixationrestsum:$scope.zijinchoubei.fixationrestsum,
                fixationrestarrivetime:$scope.zijinchoubei.fixationrestarrivetime,
                fixationrestremark:$scope.zijinchoubei.fixationrestremark,

                streamownsum:$scope.zijinchoubei.streamownsum,
                streamownarrivetime:$scope.zijinchoubei.streamownarrivetime,
                streamownremark:$scope.zijinchoubei.streamownremark,
                streamloansum:$scope.zijinchoubei.streamloansum,
                streamloanarrivetime:$scope.zijinchoubei.streamloanarrivetime,
                streamloanremark:$scope.zijinchoubei.streamloanremark,
                streamrestsum:$scope.zijinchoubei.streamrestsum,
                streamrestarrivetime:$scope.zijinchoubei.streamrestarrivetime,
                streamrestremark:$scope.zijinchoubei.streamrestremark,

                cashdepositsum:$scope.zijinchoubei.cashdepositsum,
                cashdepositarrivetime:$scope.zijinchoubei.cashdepositarrivetime,
                cashdepositremark:$scope.zijinchoubei.cashdepositremark,


                mentionmodelssum:$scope.zijinchoubei.mentionmodelssum,
                mentionmodelsarrivetime:$scope.zijinchoubei.mentionmodelsarrivetime,
                mentionmodelsremark:$scope.zijinchoubei.mentionmodelsremark
            }
            // var k={
            //   fundings:$scope.fundings
            // };
            // saveInfoFixFuntion(k);
            $scope.fundings.shopid=$scope.NewShopId;
            console.log($scope.fundings);
            Shop.addprepareFinance.save($scope.fundings,function(res){
              console.log(res);
            })
        }
        console.log($scope.fundings);
    }
    // 店面建设计划
    Shop.getprepareBuildPlan($scope.NewShopId,function(res){
      console.log('店面建设计划');
      var data = res.data;
      $scope.StoreConstructionPlan = data;
      console.log(data)

    })
    $scope.delStoreConstructionPlan = function(index,item) {
      $scope.StoreConstructionPlan.splice(index, 1);
      // deprepareBuildPla
      Shop.deprepareBuildPlan(item.id,function (res) {
        console.log(res);
      })
    };
    $scope.addStoreConstructionPlan = function() {
      $scope.inserteddmjsjh= {
        city:"",
        branch:'',
        submittime:'',
        startingtime:"",
        completetime:""
      };
      var testten = JSON.parse(JSON.stringify($scope.inserteddmjsjh));
      $scope.StoreConstructionPlan.push(testten);
    }
    $scope.saveTableL=function(){
      // var l={
      //   StoreConstructionPlan:$scope.StoreConstructionPlan
      // };
      // saveInfoFixFuntion(l);
      console.log($scope.StoreConstructionPlan);

      for(var i = 0; i<$scope.StoreConstructionPlan.length;i++ ){
        $scope.StoreConstructionPlan[i].shopid = $scope.NewShopId;

        Shop.addprepareBuildPlan.save($scope.StoreConstructionPlan[i],function(res){
          console.log('res')
          console.log(res)

        })
      }
    }
    // 关键岗位组建筹备
    // 101.201.81.214:8080/prepareKeyJob/shopId/1
    Shop.getprepareKeyJob($scope.NewShopId,function(res){
      console.log('关键岗位组建筹备');
      var data = res.data;
      $scope.keyJob = data;
      console.log(data)

    })
    $scope.delkeyJob = function(index,item) {
      $scope.keyJob.splice(index, 1);
      Shop.deprepareKeyJob(item.id,function (res) {
        console.log(res);
      })
    };
    $scope.addkeyJob = function() {
      $scope.insertedgjgwzjcb= {
        post:"",
        name:'',
        age:'',
        educationalStatus:"",
        Experience:""
      };
      var testele = JSON.parse(JSON.stringify($scope.insertedgjgwzjcb));
      $scope.keyJob.push(testele);
    }
    $scope.saveTableM=function(){
      // var m={
      //   keyJob:$scope.keyJob
      // };
      // saveInfoFixFuntion(m);

      for(var i = 0; i<$scope.keyJob.length;i++ ){
        $scope.keyJob[i].shopid = $scope.NewShopId;

        Shop.addprepareKeyJob.save($scope.keyJob[i],function(res){
          console.log('res')
          console.log(res)

        })
      }
    }
    // 组建架构筹备
    $scope.frameworkaRrange=function(organizeSchemaForm){
        $scope.submitfwra=true;
        $scope.SchemaArrange={

        }
        console.log($scope.SchemaArrange);
    }
    // -------------------营销预测分析------------------------
    $scope.MFAform={}
    Shop.getMfaformByShopId($scope.NewShopId,function(res){
      console.log('营销预测分析');
      var data = res.data;
      $scope.MFAform = data;
      console.log(data)
    })
    $scope.MarkeMarketDog=function(marketAnalyzeForm)
    {
        $scope.submitMFA=true;
        if (marketAnalyzeForm.$valid){
          // $scope.MFAform={
          //   salestarget:$scope.agent.salesTarget,
          //   forecastone:$scope.agent.forecastOne,
          //   forecasttwo:$scope.agent.forecastTwo,
          //   marketinganalysis:$scope.agent.marketingAnalysis
          // }
          // var n={
          //   MFAform:$scope.MFAform
          // };
          // saveInfoFixFuntion(n);
          $scope.MFAform.shopid = $scope.NewShopId;
          Shop.saveMfaform.save($scope.MFAform,function(res){
          console.log(res);
          });
        }

        console.log($scope.MFAform)
    }
    //提交保存弹框
    $scope.masksave=false;
    // 提交审核///////////////////////////////////////////////
    // typeof($scope.basic)!='undefined' && typeof($scope.CSmessage)!='undefined' && typeof($scope.bss)!='undefined' && typeof($scope.newCP)!='undefined' && typeof($scope.fundings)!='undefined' && typeof($scope.MFAform)!='undefined'
    $scope.allSubmit=function(){
      $scope.masksave=true;
    }
    $scope.toolTipsave=function(start){
        if (start=='affirm')
        {
            if (typeof($scope.basic)!='undefined')
            {
              var allmessage={
                basic:$scope.basic,
                SharesConstitute:$scope.SharesConstitute,
                users:$scope.users,
                carShareholder:$scope.carShareholder,
                notcarShareholder:$scope.notcarShareholder,
                maintenance:$scope.maintenance,
                CSmessage:$scope.CSmessage,
                financeStatusTable:$scope.financeStatusTable,
                bss:$scope.bss,
                BSbusinessArea:$scope.BSbusinessArea,
                BSSdatum:$scope.BSSdatum,
                newCP:$scope.newCP,
                fundings:$scope.fundings,
                StoreConstructionPlan:$scope.StoreConstructionPlan,
                keyJob:$scope.keyJob,
                SchemaArrange:$scope.SchemaArrange,
                MFAform:$scope.MFAform,
                shopApplyUserId:$scope.currentUser._id,
                newEquityStructure:$scope.newEquityStructure,
                nowBankDeposit:$scope.nowBankDeposit
              };
              // $scope.state=true;
              $scope.save='saveshow';
              $scope.saveSuccess = false;
              //如果为真，则表示数据库存在，做update操作
              if($scope._dbid){
                Shop.updateBaseinfo.save({shopId:$scope._dbid, baseinfo:allmessage},function(err, res){
                console.log('updateBaseinfo')
                console.log(err);
                console.log(res);
                getShop()
                //数据库的回调
                // $scope.saveSuccess = false;
                })
              }else{
                  Shop.baseinfo.save(allmessage,function(err, res){
                  console.log('first-allmessage')
                  console.log(err);
                  console.log(res);
                  getShop()
                })
              }



          }else{
            $scope.save='savehide';
          }
        }else{
          $scope.masksave=false;
          return;
        }
        $scope.masksave=false;
    }
    // 表单状态
    $scope.formstate=function(){
      return  $scope.verifyDataSubmitting;
    }



    function saveInfoFixFuntion (allmessage) {
            Shop.updateBaseinfo.save({shopId:$scope._dbid, baseinfo:allmessage},function(err, res){
            console.log('updateBaseinfo')
            console.log(err);
            console.log(res);
        })
    }


    // 文件上传   开始 file upload
    $scope.flag = false;
    $scope.zidaun = '';
    $scope.fileIndex = function (index,ziduan) {
      $scope.indexFlag = index;
      console.log(ziduan);
      $scope.zidaun = ziduan;
    }

    var vm = this;
    vm.fileUrl = filesUrl.url;
    $scope.fileList = [];
    var fileArray = {};
    $scope.$watch('vm.files', function (f) {
      $scope.flag = false;

      console.log('change');
      if(f&&f[0]) {
        $scope.upload(f);
        angular.forEach(f, function(file){
          $scope.fileList.push(file);
        })
      }
    });



    $scope.upload = function (files) {
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          file.dynamic = 0;
          $scope.uploadFile(file);
        }
      }
    };


    $scope.uploadFile = function(file){
      console.log($scope.indexFlag);
      file.upload = $upload.upload({
        url: vm.fileUrl+'/api/files/updateFile',
        file: file,
         data: {index: $scope.indexFlag}
      });

      file.upload.then(function(response) {
        $timeout(function() {
          // file.result = response.data;
          var key=$scope.indexFlag;
          fileArray[key]=(response.data)
          console.log('fileArray------');
          console.log(fileArray);
          $scope.flag = true;
          vm.saveFile();
          // Product.productImages.save({pid:$scope.pid, image:response.data}, function(res){
          //   })
          });
      }, function(response) {});

      file.upload.progress(function(evt) {
        // Math.min is to fix IE which reports 200% sometimes
        file.dynamic = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      });

      // file.upload.xhr(function(xhr) {
      //   // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
      // });
    };

    // 文件上传结束

    vm.saveFile = function (ziduan) {
      console.log(ziduan);
      console.log(fileArray);
      var allmessage = {}
      var key=$scope.zidaun;

      // console.log($scope.files);
      if(fileArray === {}){
        console.log('0000000000000');
      }else {
        allmessage[key]=fileArray;

        console.log('allmessage');
        console.log(allmessage);

        if ($scope.flag) {
          Shop.updateBaseinfo.save({shopId:$scope._dbid, baseinfo:allmessage},function(err, res){
              console.log('updateBaseinfo')
              console.log(err);
              console.log(res);
              getShop()
          })

        }


      }
      fileArray = {};
    }


    vm.removeFile = function (ziduan,index) {
      console.log(ziduan);
      console.log(fileArray);
      var key=index;
      fileArray[key]='';
      var allmessage = {}
      var key=ziduan;

      // console.log($scope.files);
      if(fileArray === {}){
        console.log('0000000000000');
      }else {
        allmessage[key]=fileArray;

        console.log('allmessage');
        console.log(allmessage);

          Shop.updateBaseinfo.save({shopId:$scope._dbid, baseinfo:allmessage},function(err, res){
              console.log('updateBaseinfo')
              console.log(err);
              console.log(res);
              getShop()
          })
      }
      fileArray = {};


    }





  }
})();
