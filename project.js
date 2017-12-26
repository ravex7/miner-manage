angular.module('project', ['ui.router', 'ngMaterial'])
.service('Config', function($q, $http, defaultConfig, username, password) {
  var url = "https://raw.githubusercontent.com/ravex7/miner-manage/master/config.json";
  var poolId = 1;
  var algoId = 1;
  var config = [];

  this.savePool = function (pool) {
      if (pool.id == null) {
          pool.id = poolId++;
          config.pools.push(pool);
      } else {
          for (i in config.pools) {
              if (config.pools[i].id == pool.id) {
                  config.pools[i] = pool;
              }
          }
      }
  }

  this.saveAlgo = function (algo) {
      if (algo.id == null) {
          algo.id = algoId++;
          config.algos.push(algo);
      } else {
          for (i in config.algos) {
              if (config.algos[i].id == algo.id) {
                  config.algos[i] = algo;
              }
          }
      }
  }

  this.getPool = function (id) {
    if(id){
      for (i in config.pools) {
          if (config.pools[i].id == id) {
              return config.pools[i];
          }
      }
    }else{
      return null;
    }
  }

  this.getAlgo = function (id) {
    if(id){
      for (i in config.algos) {
          if (config.algos[i].id == id) {
              return config.algos[i];
          }
      }
    }else{
      return null;
    }
  }

  this.deletePool = function (id) {
      for (i in config.pools) {
          if (config.pools[i].id == id) {
              config.pools.splice(i, 1);
          }
      }
  }

  this.deleteAlgo = function (id) {
      for (i in config.algos) {
          if (config.algos[i].id == id) {
              config.algos.splice(i, 1);
          }
      }
  }

  this.getConfig = function(){
    return config;
  }

  this.getPools = function(){
    return config.pools;
  }

  this.getAlgos = function(){
    return config.algos;
  }

  this.loadConfig = function () {
    var deferred = $q.defer();

    var username = username
    var password = password
    var reponame = "miner-manage"
    var gh = new Github({
      username: username,
      password: password
    });

    var repo = gh.getRepo(username, reponame);

    var branch = repo.getBranch("master");

    var isBinary = false;
    branch.read('config.json', isBinary)
    .done(function(contents) {
      config = JSON.parse(contents.content);
      poolId = config.pools.length + 1;
      deferred.resolve(config);
    })
    .fail(function(err) {
      config = defaultConfig;
      poolId = config.pools.length + 1;
      deferred.resolve(config);
    });
     return deferred.promise;
  }
})
.controller('ProjectListController', function($scope, Config) {
  $scope.currentNavItem = "pools";

  $scope.poolsView = true;
  $scope.poolsList = true;
  $scope.poolDetail = false;

  $scope.algosView = false;
  $scope.algosList = true;
  $scope.algoDetail = false;

  $scope.coinsView = false;
  $scope.coinsList = true;
  $scope.coinDetail = false;

  $scope.minersView = false;
  $scope.minersList = true;
  $scope.minerDetail = false;

  $scope.configView = false;

  $scope.goto = function(page) {
    switch(page){
      case "pools" : 
        $scope.poolsView = true;
        $scope.algosView = false;
        $scope.configView = false;
        $scope.minersView = false;
      break;
      case "algos" : 
        $scope.poolsView = false;
        $scope.algosView = true;
        $scope.configView = false;
        $scope.minersView = false;
      break;
      case "miners" : 
        $scope.poolsView = false;
        $scope.algosView = false;
        $scope.configView = false;
        $scope.minersView = true;
      break;
      case "config" : 
        $scope.poolsView = false;
        $scope.algosView = false;
        $scope.configView = true;
        $scope.minersView = false;
      break;
    }
  };

  $scope.getPool = function(name){
    $scope.pool = Config.getPool(name);
    $scope.poolDetail = true;
    $scope.poolsList = false;
  }

  $scope.cancelPool = function(){
    $scope.poolDetail = false;
    $scope.poolsList = true;
  }

  $scope.savePool = function(){
    Config.savePool($scope.pool);
    $scope.getPools();
    $scope.poolDetail = false;
    $scope.poolsList = true;
  }

  $scope.getConfig = function(){
    $scope.config = Config.getConfig();
  }

  $scope.getPools = function(){
    $scope.pools = Config.getPools();
  }

  $scope.getAlgos = function(){
    $scope.algos = Config.getAlgos();
  }

  $scope.getConfig = function(){
    $scope.config = Config.getConfig();
  }

  Config.loadConfig() 
   .then(function(data) {
      $scope.config = data;
      $scope.getPools();
      $scope.getAlgos();
   });
  
});