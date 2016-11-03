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
    $scope.agent={}

    // console.log('info-start');
    $scope.currentUser = Auth.getCurrentUser();

    console.log($scope.currentUser);
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
          if($scope._data.isVerify) {
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
              $scope.agent.tradeArea=data.bss.tradeArea?data.bss.tradeArea:'';
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
// ----------------------代理商简述------------------------------
    // 基本信息
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

    }
    console.log("代理商简述基本信息");
    console.log($scope.basic);


    }
    // 股份构成
     // $scope.SharesConstitute=[];
    $scope.removeSharesConstitute = function(index){
      $scope.SharesConstitute.splice(index, 1);
    };
    $scope.addSharesConstitute = function() {
      $scope.insertedgfgc = {
        stockholder:"",
        fundingSum:"",
        fundingRatio:"",
        stockholderQuale:""
      };
      $scope.SharesConstitute.push($scope.insertedgfgc);
    };
    $scope.tableVerify=false;

    // 关键人员背景
    // $scope.users=[];
    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };
    $scope.addUser = function() {
      $scope.insertedgjrybj = {
        id: $scope.users.length+1,
        name: '',
        city:'',
        duty:'',
        cellphone:null,
        Email:'',
        shark:''
      };
      $scope.users.push($scope.insertedgjrybj);
    };
    // 股份股东投资情况
    /*$scope.investment=function(InvestForm){

    }*/
    // 汽车销售领域
    // $scope.carShareholder=[

    // ]
    $scope.delShareholder = function(index) {
      $scope.carShareholder.splice(index, 1);
    };
    $scope.addcarShareholder= function(){
      $scope.insertedgdqcxslythree= {
        firmName:'',
        shark:'',
        dates:'',
        brand:'',
        genre:'',
        address:'',
        status:''
      };
      $scope.carShareholder.push($scope.insertedgdqcxslythree);
    }
    // 非汽车销售领域
    // $scope.notcarShareholder=[

    // ]
    $scope.delnotShareholder = function(index) {
      $scope.notcarShareholder.splice(index, 1);
    };
    $scope.addnotcarShareholder= function() {
      $scope.insertedfourgdfqcxs= {
        firmName: '',
        shark:'',
        mainBusiness:'',
        income:null,
        profit:''
      };
      $scope.notcarShareholder.push($scope.insertedfourgdfqcxs);
    }
    // 销售维修状况
    $scope.delmaintenance = function(index) {
      $scope.maintenance.splice(index, 1);
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
      $scope.maintenance.push($scope.insertedxswxqkthree);
    }
    // 资信状况
    $scope.creditStatus=function(CSMessageForm)
    {
        $scope.submitcreditStatus = true;
        if (CSMessageForm.$valid)
        {
          $scope.CSmessage={
           qualityRating: $scope.agent.qualityRating,
           XYDJPJbank: $scope.agent.XYDJPJbank
          }
        }

        console.log($scope.CSmessage);
    }
    // $scope.nowBankDeposit=[];
    $scope.delnowBankDeposit = function(index) {
      $scope.nowBankDeposit.splice(index,1);
    };
    $scope.addnowBankDeposit= function() {
      $scope.insertedzxqk={
           bank:"",
            sum:"",
            adjunct:""
      };
      $scope.nowBankDeposit.push($scope.insertedzxqk);
    }

    // 财务报表
    $scope.delfinanceStatusTable = function(index) {
      $scope.financeStatusTable.splice(index, 1);
    };
    $scope.addfinanceStatusTable= function() {
      $scope.insertedcwbb= {
            year:'',
            ASSET:'',
            debt:'',
            netMargin:'',
            netProfit:''
      };
      $scope.financeStatusTable.push($scope.insertedcwbb);
    }
    // 市场情况
    // $scope.saloonCar=[
    //     {
    //         "competitiveBrand":"长安福特",
    //         "storesNumber":"2",
    //         "lastYearTotalSales":"60",
    //         "lastYearMeanSalesVolume":"XXXX",
    //         "lastYearBrandShare":"XXXX",
    //         "CompetingModels":"福睿斯",
    //         "CompetingModelsSales":"x,xx",
    //         "CompetingModelsShare":"x.xx%"
    //     },{
    //         "competitiveBrand":"长安福特",
    //         "storesNumber":"2",
    //         "lastYearTotalSales":"60",
    //         "lastYearMeanSalesVolume":"XXXX",
    //         "lastYearBrandShare":"XXXX",
    //         "CompetingModels":"福睿斯",
    //         "CompetingModelsSales":"x,xx",
    //         "CompetingModelsShare":"x.xx%"
    //     },{
    //         "competitiveBrand":"长安福特",
    //         "storesNumber":"2",
    //         "lastYearTotalSales":"60",
    //         "lastYearMeanSalesVolume":"XXXX",
    //         "lastYearBrandShare":"XXXX",
    //         "CompetingModels":"福睿斯",
    //         "CompetingModelsSales":"x,xx",
    //         "CompetingModelsShare":"x.xx%"
    //     }
    // ];
    // $scope.suvsaloonCar=[
    //     {
    //         "competitiveBrand":"长安福特",
    //         "storesNumber":"2",
    //         "lastYearTotalSales":"60",
    //         "lastYearMeanSalesVolume":"XXXX",
    //         "lastYearBrandShare":"XXXX",
    //         "CompetingModels":"福睿斯",
    //         "CompetingModelsSales":"x,xx",
    //         "CompetingModelsShare":"x.xx%"
    //     },{
    //         "competitiveBrand":"长安福特",
    //         "storesNumber":"2",
    //         "lastYearTotalSales":"60",
    //         "lastYearMeanSalesVolume":"XXXX",
    //         "lastYearBrandShare":"XXXX",
    //         "CompetingModels":"福睿斯",
    //         "CompetingModelsSales":"x,xx",
    //         "CompetingModelsShare":"x.xx%"
    //     },{
    //         "competitiveBrand":"长安福特",
    //         "storesNumber":"2",
    //         "lastYearTotalSales":"60",
    //         "lastYearMeanSalesVolume":"XXXX",
    //         "lastYearBrandShare":"XXXX",
    //         "CompetingModels":"福睿斯",
    //         "CompetingModelsSales":"x,xx",
    //         "CompetingModelsShare":"x.xx%"
    //     }
    // ];
    // 区域代理商排名
    // $scope.RegionalAgents=[
    //     {
    //         "ranking":1,
    //         "dealerGroupName":"xxxx",
    //         "pitNum":"12"
    //     },{
    //         "ranking":2,
    //         "dealerGroupName":"xxxx",
    //         "pitNum":"12"
    //     },{
    //         "ranking":3,
    //         "dealerGroupName":"xxxx",
    //         "pitNum":"12"
    //     },{
    //         "ranking":4,
    //         "dealerGroupName":"xxxx",
    //         "pitNum":"12"
    //     },{
    //         "ranking":5,
    //         "dealerGroupName":"xxxx",
    //         "pitNum":"12"
    //     },{
    //         "ranking":6,
    //         "dealerGroupName":"xxxx",
    //         "pitNum":"12"
    //     },
    // ]
    // ---------------------拟建店简述------------------------
    $scope.btn2="btn21";
    $scope.locations=[
        {id:"汽车城、汽车交易市场","text":"汽车城、汽车交易市场"},
        {id:"汽车交易一条街","text":"汽车交易一条街"},
        {id:"主干道","text":"主干道"},
        {id:"其他","text":"其他"}
    ];
    $scope.landSources=[
        {id:"已购买","text":"已购买"},
        {id:"已租赁","text":"已租赁"},
        {id:"意向购买","text":"意向购买"},
        {id:"意向租赁","text":"意向租赁"},
        {id:"其它","text":"其它"}
    ]
    // 建店场地情况
    $scope.buildStoreSite=function(bssForm)
    {
        $scope.submitbss = true;
        if (bssForm.$valid){
          $scope.bss = {
            tradeArea: $scope.agent.tradeArea,
            address: $scope.agent.address,
            locations: $scope.agent.locations,
            businessName: $scope.agent.businessName,
            formationTime: $scope.agent.formationTime,
            scaleRanked: $scope.agent.scaleRanked,
            brandNum: $scope.agent.brandNum,
            brandDetail: $scope.agent.brandDetail,
            landSources: $scope.agent.landSources,
            landStatus: $scope.agent.landStatus,
            leaseStart: $scope.agent.leaseStart,
            leaseEnd: $scope.agent.leaseEnd,
            firstshopone: $scope.agent.firstshopone,
            firstshoptwo: $scope.agent.firstshoptwo,
            firstshopthree: $scope.agent.firstshopthree,
            firstshopfour: $scope.agent.firstshopfour,
            notfirstShopone:$scope.agent.notfirstShopone,
            notfirstShoptwo:$scope.agent.notfirstShoptwo,
            notfirstShopthree:$scope.agent.notfirstShopthree,
            notfirstShopfour:$scope.agent.notfirstShopfour,
            notfirstShopfive:$scope.agent.notfirstShopfive,
            jsMode: $scope.agent.jsMode,
            sqGrade: $scope.agent.sqGrade,
            constructionStart: $scope.agent.constructionStart,
            constructionEnd: $scope.agent.constructionEnd,
            soilArea: $scope.agent.soilArea,
            soilWidth: $scope.agent.soilWidth,
            soilDepth: $scope.agent.soilDepth,
            buildArea: $scope.agent.buildArea,
            buildWidth: $scope.agent.buildWidth,
            buildDepth: $scope.agent.buildDepth,
            overallHeight: $scope.agent.overallHeight,
            showcaseHeight: $scope.agent.showcaseHeight,
            afterSaleBuildArea: $scope.agent.afterSaleBuildArea
          }
        }

        console.log($scope.bss);
    }
    // 建店城市商圈
    $scope.delBSbusinessArea = function(index) {
      $scope.BSbusinessArea.splice(index, 1);
    };
    $scope.addBSbusinessArea= function() {
      $scope.insertedjdcssq= {
        proposed:false,
        market:'',
        distance:'',
        limousineBrand:"",
        otherBrand:""
      };
      $scope.BSbusinessArea.push($scope.insertedjdcssq);
    };
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
    $scope.newCompanyPrepare=function(newCPForm)
    {
        $scope.submitnewCP = true;
        if (newCPForm.$valid){
          $scope.newCP={
            LPstatus: $scope.agent.LPstatus,
            companyName: $scope.agent.companyName,
            registeredAddress: $scope.agent.registeredAddress,
            corporateProperty: $scope.agent.corporateProperty,
            MaintenanceQualification: $scope.agent.MaintenanceQualification,
            registrationTime: $scope.agent.registrationTime,
            rirmRegisteredAddress: $scope.agent.rirmRegisteredAddress
          }
        }

        console.log($scope.newCP);
    }
    // 新公司股权结构
    $scope.delnewEquityStructure = function(index) {
      $scope.newEquityStructure.splice(index, 1);
    };
    $scope.addnewEquityStructure = function() {
      $scope.insertedxgsgqjg= {
        shareholder:"",
        affiliation:"",
        FundingSum:'',
        Fundingscale:'',
        nature:""
      };
      $scope.newEquityStructure.push($scope.insertedxgsgqjg);
    }

    // 资金筹备
    $scope.funding=function(fundingForm){
        $scope.submitfunding=true;
        if (fundingForm.$valid)
        {
          $scope.fundings={

                fixationOwnSum:$scope.agent.fixationOwnSum,
                fixationOwnArriveTime:$scope.agent.fixationOwnArriveTime,
                fixationOwnRemark:$scope.agent.fixationOwnRemark,
                fixationloanSum:$scope.agent.fixationloanSum,
                fixationloanArriveTime:$scope.agent.fixationloanArriveTime,
                fixationloanRemark:$scope.agent.fixationloanRemark,
                fixationrestSum:$scope.agent.fixationrestSum,
                fixationrestArriveTime:$scope.agent.fixationrestArriveTime,
                fixationrestRemark:$scope.agent.fixationrestRemark,

                streamownSum:$scope.agent.streamownSum,
                streamownArriveTime:$scope.agent.streamownArriveTime,
                streamownRemark:$scope.agent.streamownRemark,
                streamloanSum:$scope.agent.streamloanSum,
                streamloanArriveTime:$scope.agent.streamloanArriveTime,
                streamloanRemark:$scope.agent.streamloanRemark,
                streamrestSum:$scope.agent.streamrestSum,
                streamrestArriveTime:$scope.agent.streamrestArriveTime,
                streamrestRemark:$scope.agent.streamrestRemark,

                cashDepositSum:$scope.agent.cashDepositSum,
                cashDepositArriveTime:$scope.agent.cashDepositArriveTime,
                cashDepositRemark:$scope.agent.cashDepositRemark,


                mentionModelsSum:$scope.agent.mentionModelsSum,
                mentionModelsArriveTime:$scope.agent.mentionModelsArriveTime,
                mentionModelsRemark:$scope.agent.mentionModelsRemark
            }
        }
        console.log($scope.fundings);
    }
    // 店面建设计划
    $scope.delStoreConstructionPlan = function(index) {
      $scope.StoreConstructionPlan.splice(index, 1);
    };
    $scope.addStoreConstructionPlan = function() {
      $scope.inserteddmjsjh= {
        city:"",
        branch:'',
        submitTime:'',
        startingTime:"",
        completeTime:""
      };
      $scope.StoreConstructionPlan.push($scope.inserteddmjsjh);
    }
    // 关键岗位组建筹备
    $scope.delkeyJob = function(index) {
      $scope.keyJob.splice(index, 1);
    };
    $scope.addkeyJob = function() {
      $scope.insertedgjgwzjcb= {
        post:"",
        name:'',
        age:'',
        educationalStatus:"",
        Experience:""
      };
      $scope.keyJob.push($scope.insertedgjgwzjcb);
    }
    // 组建架构筹备
    $scope.frameworkaRrange=function(organizeSchemaForm){
        $scope.submitfwra=true;
        $scope.SchemaArrange={

        }
        console.log($scope.SchemaArrange);
    }
    // -------------------营销预测分析------------------------
    $scope.MarkeMarketDog=function(marketAnalyzeForm)
    {
        $scope.submitMFA=true;
        if (marketAnalyzeForm.$valid){
          $scope.MFAform={
            salesTarget:$scope.agent.salesTarget,
            forecastOne:$scope.agent.forecastOne,
            forecastTwo:$scope.agent.forecastTwo,
            marketingAnalysis:$scope.agent.marketingAnalysis
          }
        }

        console.log($scope.MFAform);
    }

    // 提交审核///////////////////////////////////////////////
    // typeof($scope.basic)!='undefined' && typeof($scope.CSmessage)!='undefined' && typeof($scope.bss)!='undefined' && typeof($scope.newCP)!='undefined' && typeof($scope.fundings)!='undefined' && typeof($scope.MFAform)!='undefined'
    $scope.allSubmit=function(){
      if (typeof($scope.basic)!='undefined')
      {
        console.log("提交审核，表单验证通过")
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
        Shop.baseinfo.save(allmessage,function(err, res) {
            console.log('first-allmessage')
            console.log(err);
            console.log(res);
            getShop()
        })
        }



      }else{
        $scope.save='savehide';
      }

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
          file.result = response.data;
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
