/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.ruwangguanlia')
      .controller('InfoCtrl', InfoCtrl);

  /** @ngInject */
  function InfoCtrl($scope, Shop, Auth, Audit)
  {
    $scope.agent={}

    // console.log('info-start');
    $scope.currentUser = Auth.getCurrentUser();

    console.log($scope.currentUser)

    Shop.getShopsByuserId.get({id:$scope.currentUser._id},function(data){
        console.log(data);
              // console.log(data);
        $scope._dbid = data._id;
        $scope.verifyDataSubmitting = data.verifyDataSubmitting;
        $scope._data = data;
        if($scope._data.verifyDataSubmitting) {
          $scope.show="check1";
        }
        if($scope._data.isVerify) {
          $scope.show="check2";
        }
        if($scope._data.notverify) {
          $scope.show="check3";
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



        //获取数据库中是否存有相关信息的标示
        // 基本信息
        if (data.basic){
           $scope._dbid = data._id;
            $scope.agent.companyName=data.basic.companyName?data.basic.companyName:'';
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
            $scope.agent.nowBank=data.CSmessage.nowBank?data.CSmessage.nowBank:[];
            $scope.nowBankDeposit=$scope.agent.nowBank;
        }else{
            $scope.nowBankDeposit=[];
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
            $scope.agent.firstShop.firstshop1=data.bss.firstShop.firstshop1?data.bss.firstShop.firstshop1:false;
            $scope.agent.firstShop.firstshop2=data.bss.firstShop.firstshop2?data.bss.firstShop.firstshop2:false;
            $scope.agent.firstShop.firstshop3=data.bss.firstShop.firstshop3?data.bss.firstShop.firstshop3:false;
            $scope.agent.firstShop.firstshop4=data.bss.firstShop.firstshop4?data.bss.firstShop.firstshop4:false;
            $scope.agent.notfirstShop.notfirstShop1=data.bss.notfirstShop.notfirstShop1?data.bss.notfirstShop.notfirstShop1:false;
            $scope.agent.notfirstShop.notfirstShop2=data.bss.notfirstShop.notfirstShop2?data.bss.notfirstShop.notfirstShop2:false;
            $scope.agent.notfirstShop.notfirstShop3=data.bss.notfirstShop.notfirstShop3?data.bss.notfirstShop.notfirstShop3:false;
            $scope.agent.notfirstShop.notfirstShop4=data.bss.notfirstShop.notfirstShop4?data.bss.notfirstShop.notfirstShop4:false;
            $scope.agent.notfirstShop.notfirstShop5=data.bss.notfirstShop.notfirstShop5?data.bss.notfirstShop.notfirstShop5:false;
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
        if (data.funding){
            if (data.funding.fixation){
                $scope.agent.fixation.OwnSum=data.funding.fixation.fixationOwnSum?data.funding.fixation.fixationOwnSum:'';
                $scope.agent.fixation.OwnArriveTime=data.funding.fixation.fixationOwnArriveTime?data.funding.fixation.fixationOwnArriveTime:'';
                $scope.agent.fixation.OwnRemark=data.funding.fixation.fixationOwnRemark?data.funding.fixation.fixationOwnRemark:'';
                $scope.agent.fixation.loanSum=data.funding.fixation.fixationloanSum?data.funding.fixation.fixationloanSum:'';
                $scope.agent.fixation.loanArriveTime=data.funding.fixation.fixationloanArriveTime?data.funding.fixation.fixationloanArriveTime:'';
                $scope.agent.fixation.loanRemark=data.funding.fixation.fixationloanRemark?data.funding.fixation.fixationloanRemark:'';
                $scope.agent.fixation.restSum=data.funding.fixation.fixationrestSum?data.funding.fixation.fixationrestSum:'';
                $scope.agent.fixation.restArriveTime=data.funding.fixation.restArriveTime?data.funding.fixation.restArriveTime:'';
                $scope.agent.fixation.restRemark=data.funding.fixation.restRemark?data.funding.fixation.restRemark:'';
            };
            if (data.funding.stream){
                $scope.agent.stream.OwnSum=data.funding.stream.streamownSum?data.funding.stream.streamownSum:'';
                $scope.agent.stream.OwnArriveTime=data.funding.stream.streamownArriveTime?data.funding.stream.streamownArriveTime:'';
                $scope.agent.stream.OwnRemark=data.funding.stream.streamownRemark?data.funding.stream.streamownRemark:'';
                $scope.agent.stream.loanSum=data.funding.stream.streamloanSum?data.funding.stream.streamloanSum:'';
                $scope.agent.stream.loanArriveTime=data.funding.stream.streamloanArriveTime?data.funding.stream.streamloanArriveTime:'';
                $scope.agent.stream.loanRemark=data.funding.stream.streamloanRemark?data.funding.stream.streamloanRemark:'';
                $scope.agent.stream.restSum=data.funding.stream.streamrestSum?data.funding.stream.streamrestSum:'';
                $scope.agent.stream.restArriveTime=data.funding.stream.streamrestArriveTime?data.funding.stream.streamrestArriveTime:'';
                $scope.agent.stream.restRemark=data.funding.stream.streamrestRemark?data.funding.stream.streamrestRemark:'';
            };
            if (data.funding.cashDeposit){
                $scope.agent.cashDeposit.Sum=data.funding.cashDeposit.cashDepositSum?data.funding.cashDeposit.cashDepositSum:'';
                $scope.agent.cashDeposit.ArriveTime=data.funding.cashDeposit.cashDepositArriveTime?data.funding.cashDeposit.cashDepositArriveTime:'';
                $scope.agent.cashDeposit.Remark=data.funding.cashDeposit.cashDepositRemark?data.funding.cashDeposit.cashDepositRemark:'';
            };
            if (data.funding.mentionModels){
                $scope.agent.mentionModels.Sum=data.funding.mentionModels.mentionModelsSum?data.funding.mentionModels.mentionModelsSum:'';
                $scope.agent.mentionModels.ArriveTime=data.funding.mentionModels.mentionModelsArriveTime?data.funding.mentionModels.mentionModelsArriveTime:'';
                $scope.agent.mentionModels.Remark=data.funding.mentionModels.mentionModelsRemark?data.funding.mentionModels.mentionModelsRemark:'';
            };
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



    $scope.verifyDataSubmittingBtn=function(){
        console.log('verifyDataSubmitting');
        Audit.verifyDataSubmitting.save({shopId:$scope._dbid})
        $scope.verifyDataSubmitting = true;
        // $scope.btnFlag = $scope.verifyDataSubmitting;
        // Shop.getShopsById.get({id:$scope.shopId},function(res){
        //   console.log(res);
        //   $scope.onwerShop = res;
        // })

    }

    $scope.someinfo = 'info';
    // 审核状态

    $scope.show="check0";

    // 表单状态
    // $scope.state=false;

    $scope.btn="btn1";
// ----------------------代理商简述------------------------------
    // 基本信息
    $scope.basicInformation=function(BasicForm)
    {
    	$scope.submitbasic = true;
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
    	console.log($scope.basic);

    }
    // 股份构成
     // $scope.SharesConstitute=[];
    $scope.removeSharesConstitute = function(index) {
      $scope.SharesConstitute.splice(index, 1);
    };
    $scope.addSharesConstitute = function() {
      $scope.inserted = {
        stockholder:"",
        fundingSum:"",
        fundingRatio:"",
        stockholderQuale:""
      };
      $scope.SharesConstitute.push($scope.inserted);
    };
    // 关键人员背景
    // $scope.users=[];
    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };
    $scope.addUser = function() {
      $scope.inserted = {
        id: $scope.users.length+1,
        name: '',
        city:'',
        duty:'',
        cellphone:null,
        Email:'',
        shark:''
      };
      $scope.users.push($scope.inserted);
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
      $scope.inserted= {
        firmName:'',
        shark:'',
        date:'',
        brand:'',
        genre:'',
        address:'',
        status:''
      };
      $scope.carShareholder.push($scope.inserted);
    }
    // 非汽车销售领域
    // $scope.notcarShareholder=[

    // ]
    $scope.delnotShareholder = function(index) {
      $scope.notcarShareholder.splice(index, 1);
    };
    $scope.addnotcarShareholder= function() {
      $scope.inserted= {
        firmName: '',
        shark:'',
        mainBusiness:'',
        income:null,
        profit:''
      };
      $scope.notcarShareholder.push($scope.inserted);
    }
    // 销售维修状况
    /*$scope.maintenance=function(ServiceForm){

    }*/
    // $scope.maintenance=[
    //     {
    //         "COHR":'公司A',
    //         "brand":'凯迪拉克',
    //         "fourteen":{
    //             "salesVolume":'800',
    //             "marketShare":'20%',
    //             "several":1000
    //         },
    //         "fifteen":{
    //             "salesVolume":'1000',
    //             "marketShare":'30%',
    //             "several":1100
    //         },
    //         "sixteen":{
    //             "salesVolume":'900',
    //             "marketShare":'20%',
    //             "several":1200
    //         }
    //     },
    // ];
    $scope.delmaintenance = function(index) {
      $scope.maintenance.splice(index, 1);
    };
    $scope.addmaintenance= function() {
      $scope.inserted= {
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
      $scope.maintenance.push($scope.inserted);
    }
    // 资信状况
    $scope.creditStatus=function(CSMessageForm)
    {
        $scope.submitcreditStatus = true;
        $scope.CSmessage={
           qualityRating: $scope.agent.qualityRating,
           XYDJPJbank: $scope.agent.XYDJPJbank,
           nowBank:$scope.nowBankDeposit
        }
        console.log($scope.CSmessage);
    }
    // $scope.nowBankDeposit=[];
    $scope.delnowBankDeposit = function(index) {
      $scope.nowBankDeposit.splice(index,1);
    };
    $scope.addnowBankDeposit= function() {
      $scope.inserted={
           bank:"",
            sum:"",
            adjunct:""
      };
      $scope.nowBankDeposit.push($scope.inserted);
    }

    // 财务报表
    /*$scope.financing=function(financeForm){

    }*/
    // $scope.financeStatusTable=[
    //     {
    //         "year":'2016',
    //         "ASSET":'100',
    //         "debt":'30',
    //         "netMargin":'15%',
    //         "netProfit":'60'
    //     }
    // ];
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $scope.delfinanceStatusTable = function(index) {
      $scope.financeStatusTable.splice(index, 1);
    };
    $scope.addfinanceStatusTable= function() {
      $scope.inserted= {
            year:'',
            ASSET:'',
            debt:'',
            netMargin:'',
            netProfit:''
      };
      $scope.financeStatusTable.push($scope.inserted);
    }
    // 市场情况
    $scope.saloonCar=[
        {
            "competitiveBrand":"长安福特",
            "storesNumber":"2",
            "lastYearTotalSales":"60",
            "lastYearMeanSalesVolume":"XXXX",
            "lastYearBrandShare":"XXXX",
            "CompetingModels":"福睿斯",
            "CompetingModelsSales":"x,xx",
            "CompetingModelsShare":"x.xx%"
        },{
            "competitiveBrand":"长安福特",
            "storesNumber":"2",
            "lastYearTotalSales":"60",
            "lastYearMeanSalesVolume":"XXXX",
            "lastYearBrandShare":"XXXX",
            "CompetingModels":"福睿斯",
            "CompetingModelsSales":"x,xx",
            "CompetingModelsShare":"x.xx%"
        },{
            "competitiveBrand":"长安福特",
            "storesNumber":"2",
            "lastYearTotalSales":"60",
            "lastYearMeanSalesVolume":"XXXX",
            "lastYearBrandShare":"XXXX",
            "CompetingModels":"福睿斯",
            "CompetingModelsSales":"x,xx",
            "CompetingModelsShare":"x.xx%"
        }
    ];
    $scope.suvsaloonCar=[
        {
            "competitiveBrand":"长安福特",
            "storesNumber":"2",
            "lastYearTotalSales":"60",
            "lastYearMeanSalesVolume":"XXXX",
            "lastYearBrandShare":"XXXX",
            "CompetingModels":"福睿斯",
            "CompetingModelsSales":"x,xx",
            "CompetingModelsShare":"x.xx%"
        },{
            "competitiveBrand":"长安福特",
            "storesNumber":"2",
            "lastYearTotalSales":"60",
            "lastYearMeanSalesVolume":"XXXX",
            "lastYearBrandShare":"XXXX",
            "CompetingModels":"福睿斯",
            "CompetingModelsSales":"x,xx",
            "CompetingModelsShare":"x.xx%"
        },{
            "competitiveBrand":"长安福特",
            "storesNumber":"2",
            "lastYearTotalSales":"60",
            "lastYearMeanSalesVolume":"XXXX",
            "lastYearBrandShare":"XXXX",
            "CompetingModels":"福睿斯",
            "CompetingModelsSales":"x,xx",
            "CompetingModelsShare":"x.xx%"
        }
    ];
    // 区域代理商排名
    $scope.RegionalAgents=[
        {
            "ranking":1,
            "dealerGroupName":"xxxx",
            "pitNum":"12"
        },{
            "ranking":2,
            "dealerGroupName":"xxxx",
            "pitNum":"12"
        },{
            "ranking":3,
            "dealerGroupName":"xxxx",
            "pitNum":"12"
        },{
            "ranking":4,
            "dealerGroupName":"xxxx",
            "pitNum":"12"
        },{
            "ranking":5,
            "dealerGroupName":"xxxx",
            "pitNum":"12"
        },{
            "ranking":6,
            "dealerGroupName":"xxxx",
            "pitNum":"12"
        },
    ]
    // ---------------------拟建店简述------------------------
    $scope.btn2="btn21";
    $scope.locations=[
        {id:"01","text":"汽车城、汽车交易市场"},
        {id:"02","text":"汽车交易一条街"},
        {id:"03","text":"主干道"},
        {id:"04","text":"其他"}
    ];
    $scope.landSources=[
        {id:"11","text":"已购买"},
        {id:"12","text":"已租赁"},
        {id:"13","text":"意向购买"},
        {id:"14","text":"意向租赁"},
        {id:"15","text":"其它"}
    ]
    // 建店场地情况
    $scope.buildStoreSite=function(bssForm)
    {
        $scope.submitbss = true;
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
            firstShop:{
               firstshop1: $scope.agent.firstShop.firstshop1,
               firstshop2: $scope.agent.firstShop.firstshop2,
               firstshop3: $scope.agent.firstShop.firstshop3,
               firstshop4: $scope.agent.firstShop.firstshop4
            },
            notfirstShop:{
                notfirstShop1:$scope.agent.notfirstShop.notfirstShop1,
                notfirstShop2:$scope.agent.notfirstShop.notfirstShop2,
                notfirstShop3:$scope.agent.notfirstShop.notfirstShop3,
                notfirstShop4:$scope.agent.notfirstShop.notfirstShop4,
                notfirstShop5:$scope.agent.notfirstShop.notfirstShop5
            },
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
        console.log($scope.bss);
    }
    // 建店城市商圈
    // $scope.BSbusinessArea=[
    //     {
    //         "proposed":true,
    //         "market":'东环汽车公园',
    //         "distance":'14km',
    //         "limousineBrand":"玛莎拉蒂、保时捷",
    //         "otherBrand":"丰田,别克"
    //     },
    //     {
    //         "proposed":true,
    //         "market":'明宇汽车城',
    //         "distance":'8km',
    //         "limousineBrand":"宾利",
    //         "otherBrand":"宝马,奔驰"
    //     }
    // ];
    $scope.delBSbusinessArea = function(index) {
      $scope.BSbusinessArea.splice(index, 1);
    };
    $scope.addBSbusinessArea= function() {
      $scope.inserted= {
        proposed:false,
        market:'',
        distance:'',
        limousineBrand:"",
        otherBrand:""
      };
      $scope.BSbusinessArea.push($scope.inserted);
    };
    // 建店场地相关资料
    $scope.btn23="btn231";
    $scope.BuiltShopSiteTable=function(BSSdatumForm){
        $scope.submitBSSD = true;
        $scope.BSSdatum={

        }
        console.log($scope.BSSdatum);
    }
// ----------------------拟建店筹备-------------------------------
    // 新公司筹备
    $scope.btn3="btn31";
    $scope.MQ=[
        {id:"301","text":"一类"},
        {id:"302","text":"二类"},
        {id:"303","text":"三类"}
    ];
    $scope.EN=[
        {id:"311","text":"国有"},
        {id:"312","text":"集体"}
    ];
    $scope.newCompanyPrepare=function(newCPForm)
    {
        $scope.submitnewCP = true;
        $scope.newCP = {
            LPstatus: $scope.agent.LPstatus,
            companyName: $scope.agent.companyName,
            registeredAddress: $scope.agent.registeredAddress,
            corporateProperty: $scope.agent.corporateProperty,
            MaintenanceQualification: $scope.agent.MaintenanceQualification,
            registrationTime: $scope.agent.registrationTime,
            rirmRegisteredAddress: $scope.agent.rirmRegisteredAddress
        }
        console.log($scope.newCP);
    }
    // 新公司股权结构

    // 资金筹备
    $scope.funding=function(fundingForm){
        $scope.submitfunding=true;
        // console.log($scope.agent.stream.OwnSum);
        $scope.funding={
            fixation:{
                fixationOwnSum:$scope.agent.fixation.OwnSum,
                fixationOwnArriveTime:$scope.agent.fixation.OwnArriveTime,
                fixationOwnRemark:$scope.agent.fixation.OwnRemark,
                fixationloanSum:$scope.agent.fixation.loanSum,
                fixationloanArriveTime:$scope.agent.fixation.loanArriveTime,
                fixationloanRemark:$scope.agent.fixation.loanRemark,
                fixationrestSum:$scope.agent.fixation.restSum,
                restArriveTime:$scope.agent.fixation.restArriveTime,
                restRemark:$scope.agent.fixation.restRemark
            },
            stream:{
                streamownSum:$scope.agent.stream.OwnSum,
                streamownArriveTime:$scope.agent.stream.OwnArriveTime,
                streamownRemark:$scope.agent.stream.OwnRemark,
                streamloanSum:$scope.agent.stream.loanSum,
                streamloanArriveTime:$scope.agent.stream.loanArriveTime,
                streamloanRemark:$scope.agent.stream.loanRemark,
                streamrestSum:$scope.agent.stream.restSum,
                streamrestArriveTime:$scope.agent.stream.restArriveTime,
                streamrestRemark:$scope.agent.stream.restRemark
            },
            cashDeposit:{
                cashDepositSum:$scope.agent.cashDeposit.Sum,
                cashDepositArriveTime:$scope.agent.cashDeposit.ArriveTime,
                cashDepositRemark:$scope.agent.cashDeposit.Remark,
            },
            mentionModels:{
                mentionModelsSum:$scope.agent.mentionModels.Sum,
                mentionModelsArriveTime:$scope.agent.mentionModels.ArriveTime,
                mentionModelsRemark:$scope.agent.mentionModels.Remark,
            }


        }
        console.log($scope.funding);

    }
    // 店面建设计划
    // $scope.StoreConstructionPlan=[
    //     {
    //         "city":"杭州",
    //         "branch":'滨江网点',
    //         "submitTime":'2016.06.09',
    //         "startingTime":"2016.03.04",
    //         "completeTime":"2016.06.08"
    //     }
    // ];
    $scope.delStoreConstructionPlan = function(index) {
      $scope.StoreConstructionPlan.splice(index, 1);
    };
    $scope.addStoreConstructionPlan = function() {
      $scope.inserted= {
        city:"",
        branch:'',
        submitTime:'',
        startingTime:"",
        completeTime:""
      };
      $scope.StoreConstructionPlan.push($scope.inserted);
    }
    // 关键岗位组建筹备
    // $scope.keyJob=[
    //     {
    //         "post":"董事长",
    //         "name":'曼妮',
    //         "age":'32',
    //         "educationalStatus":"本科",
    //         "Experience":"8"
    //     },{
    //         "post":"董事长助理",
    //         "name":'李四',
    //         "age":'26',
    //         "educationalStatus":"本科",
    //         "Experience":"3"
    //     }
    // ];
    $scope.delkeyJob = function(index) {
      $scope.keyJob.splice(index, 1);
    };
    $scope.addkeyJob = function() {
      $scope.inserted= {
        post:"",
        name:'',
        age:'',
        educationalStatus:"",
        Experience:""
      };
      $scope.keyJob.push($scope.inserted);
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
        $scope.MFAform={
            salesTarget:$scope.agent.salesTarget,
            forecastOne:$scope.agent.forecastOne,
            forecastTwo:$scope.agent.forecastTwo,
            marketingAnalysis:$scope.agent.marketingAnalysis
        }
        console.log($scope.MFAform);
    }

    //-------------------- 相关附件上传------------------------
    // 提交审核
    $scope.allSubmit=function(){

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
            funding:$scope.funding,
            StoreConstructionPlan:$scope.StoreConstructionPlan,
            keyJob:$scope.keyJob,
            SchemaArrange:$scope.SchemaArrange,
            MFAform:$scope.MFAform,
            shopApplyUserId:$scope.currentUser._id

        };
        // $scope.state=true;
        console.log('hello word');
        console.log($scope._dbid);
        //如果为真，则表示数据库存在，做update操作
        if($scope._dbid){
            Shop.updateBaseinfo.save({shopId:$scope._dbid, baseinfo:allmessage},function(err, res){
            console.log('updateBaseinfo')
            console.log(err);
            console.log(res);
        })
        }else{
        Shop.baseinfo.save(allmessage,function(err, res) {
            console.log('first-allmessage')
            console.log(err);
            console.log(res);
        })
        }
    }

    // 表单状态
    $scope.formstate=function(){
      return  $scope.verifyDataSubmitting;
    }
  }
})();
