angular.module('project', ['ui.router', 'ngMaterial','ngClipboard'])
.service('Config', function($q, $http, defaultConfig, username, password) {
  this.username = username;
  this.password = password;
  var url = "https://raw.githubusercontent.com/ravex7/miner-manage/master/config.json";
  var algoId = 1;
  var poolId = 1;
  var portId = 1;
  var addressId = 1;
  var coinId = 1;
  var minerId = 1;
  var runId = 1;
  var config = [];

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
  
  this.savePort = function (port) {
      if (port.id == null) {
          port.id = portId++;
          config.ports.push(port);
      } else {
          for (i in config.ports) {
              if (config.ports[i].id == port.id) {
                  config.ports[i] = port;
              }
          }
      }
  }
  
  this.saveAddress = function (address) {
      if (address.id == null) {
          address.id = addressId++;
          config.addresses.push(address);
      } else {
          for (i in config.addresses) {
              if (config.addresses[i].id == address.id) {
                  config.addresses[i] = address;
              }
          }
      }
  }
  
  this.saveCoin = function (coin) {
      if (coin.id == null) {
          coin.id = coinId++;
          config.coins.push(coin);
      } else {
          for (i in config.coins) {
              if (config.coins[i].id == coin.id) {
                  config.coins[i] = coin;
              }
          }
      }
  }

  this.saveMiner = function (miner) {
      if (miner.id == null) {
          miner.id = minerId++;
          config.miners.push(miner);
      } else {
          for (i in config.miners) {
              if (config.miners[i].id == miner.id) {
                  config.miners[i] = miner;
              }
          }
      }
  }
  
  this.saveRun = function (run) {
      if (run.id == null) {
          run.id = runId++;
          config.runs.push(run);
      } else {
          for (i in config.runs) {
              if (config.runs[i].id == run.id) {
                  config.runs[i] = run;
              }
          }
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
  
  this.getPort = function (id) {
    if(id){
      for (i in config.ports) {
          if (config.ports[i].id == id) {
              return config.ports[i];
          }
      }
    }else{
      return null;
    }
  }
  
  this.getAddress = function (id) {
    if(id){
      for (i in config.addresses) {
          if (config.addresses[i].id == id) {
              return config.addresses[i];
          }
      }
    }else{
      return null;
    }
  }
  
  this.getCoin = function (id) {
    if(id){
      for (i in config.coins) {
          if (config.coins[i].id == id) {
              return config.coins[i];
          }
      }
    }else{
      return null;
    }
  }

  this.getMiner = function (id) {
    if(id){
      for (i in config.miners) {
          if (config.miners[i].id == id) {
              return config.miners[i];
          }
      }
    }else{
      return null;
    }
  }
  
  this.getRun = function (id) {
    if(id){
      for (i in config.runs) {
          if (config.runs[i].id == id) {
              return config.runs[i];
          }
      }
    }else{
      return null;
    }
  }

  this.deleteAlgo = function (id) {
      for (i in config.algos) {
          if (config.algos[i].id == id) {
              config.algos.splice(i, 1);
          }
      }
  }
  
  this.deletePool = function (id) {
      for (i in config.pools) {
          if (config.pools[i].id == id) {
              config.pools.splice(i, 1);
          }
      }
  }
  
  this.deletePort = function (id) {
      for (i in config.ports) {
          if (config.ports[i].id == id) {
              config.ports.splice(i, 1);
          }
      }
  }

  this.deleteMiner = function (id) {
      for (i in config.miners) {
          if (config.miners[i].id == id) {
              config.miners.splice(i, 1);
          }
      }
  }
  
  this.deleteRun = function (id) {
      for (i in config.runs) {
          if (config.runs[i].id == id) {
              config.runs.splice(i, 1);
          }
      }
  }

  this.getConfigVar = function(){
    return config;
  }

  this.getAlgos = function(){
    return config.algos;
  }
  
  this.getPools = function(){
    return config.pools;
  }
  
  this.getPorts = function(){
    return config.ports;
  }
  
  this.getAddresses = function(){
    return config.addresses;
  }
  
  this.getCoins = function(){
    return config.coins;
  }

  this.getMiners = function(){
    return config.miners;
  }
  
  this.getRuns = function(){
    return config.runs;
  }

  this.loadConfigFile = function () {
    var deferred = $q.defer();

    var username = this.username
    var password = this.password
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
	  if(typeof config.algos != 'undefined'){
		  algoId = config.algos.length + 1;
	  }
	  if(typeof config.pools != 'undefined'){
		  poolId = config.pools.length + 1;
	  }
	  if(typeof config.ports != 'undefined'){
		  portId = config.ports.length + 1;
	  }
	  if(typeof config.addresses != 'undefined'){
		  addressId = config.addresses.length + 1;
	  }
      if(typeof config.coins != 'undefined'){
		  coinId = config.coins.length + 1;
	  }
	  
      deferred.resolve(config);
    })
    .fail(function(err) {
      config = defaultConfig;
	  if(typeof config.algos != 'undefined'){
		  algoId = config.algos.length + 1;
	  }
	  if(typeof config.pools != 'undefined'){
		  poolId = config.pools.length + 1;
	  }
	  if(typeof config.ports != 'undefined'){
		  portId = config.ports.length + 1;
	  }
	  if(typeof config.addresses != 'undefined'){
		  addressId = config.addresses.length + 1;
	  }
      if(typeof config.coins != 'undefined'){
		  coinId = config.coins.length + 1;
	  }
      deferred.resolve(config);
    });
     return deferred.promise;
  }
  
  this.saveConfigFile = function (config) {
    var deferred = $q.defer();

    var username = this.username
    var password = this.password
    var reponame = "miner-manage"
    var gh = new Github({
      username: username,
      password: password
    });

    var repo = gh.getRepo(username, reponame);

    var branch = repo.getBranch("master");

    var isBinary = false;
	
	var content = config;
	var message = "COMMIT UPDATE CONFIG";
	
	branch.write('config.json', JSON.stringify(content), message, isBinary, true)
	.done(function(result) {
		deferred.resolve(result);
	})
	.fail(function(err) {
		deferred.resolve(err);
    });
     return deferred.promise;
  }
  
})
.controller('ProjectListController', function($scope, Config, ngClipboard) {
  $scope.Config = Config;
  $scope.currentNavItem = "algos";

  $scope.algosView = true;
  $scope.algosList = true;
  $scope.algoDetail = false;

  $scope.poolsView = false;
  $scope.poolsList = true;
  $scope.poolDetail = false;

  $scope.portsView = false;
  $scope.portsList = true;
  $scope.portDetail = false;
  
  $scope.addressesView = false;
  $scope.addressesList = true;
  $scope.addressDetail = false;
  
  $scope.coinsView = false;
  $scope.coinsList = true;
  $scope.coinDetail = false;

  $scope.minersView = false;
  $scope.minersList = true;
  $scope.minerDetail = false;

  $scope.runsView = false;
  $scope.runsList = true;
  $scope.runDetail = false;


  $scope.goto = function(page) {
    switch(page){
	  case "algos" : 
        $scope.poolsView = false;
        $scope.algosView = true;
		$scope.portsView = false;
		$scope.addressesView = false;
		$scope.coinsView = false;
        $scope.minersView = false;
		$scope.runsView = false;
      break;
      case "pools" : 
        $scope.poolsView = true;
        $scope.algosView = false;
		$scope.portsView = false;
		$scope.addressesView = false;
		$scope.coinsView = false;
        $scope.minersView = false;
		$scope.runsView = false;
      break;
      case "ports" : 
        $scope.poolsView = false;
        $scope.algosView = false;
		$scope.portsView = true;
		$scope.addressesView = false;
		$scope.coinsView = false;
        $scope.minersView = false;
		$scope.runsView = false;
      break;
	  case "addresses" : 
        $scope.poolsView = false;
        $scope.algosView = false;
		$scope.portsView = false;
		$scope.addressesView = true;
		$scope.coinsView = false;
        $scope.minersView = false;
		$scope.runsView = false;
      break;
	  case "coins" : 
        $scope.poolsView = false;
        $scope.algosView = false;
		$scope.portsView = false;
		$scope.addressesView = false;
		$scope.coinsView = true;
        $scope.minersView = false;
		$scope.runsView = false;
      break;
      case "miners" : 
        $scope.poolsView = false;
        $scope.algosView = false;
		$scope.portsView = false;
		$scope.addressesView = false;
		$scope.coinsView = false;
        $scope.minersView = true;
		$scope.runsView = false;
      break;
      case "runs" : 
        $scope.poolsView = false;
        $scope.algosView = false;
		$scope.portsView = false;
		$scope.addressesView = false;
		$scope.coinsView = false;
        $scope.minersView = false;
		$scope.runsView = true;
      break;
    }
  };

  $scope.getAlgo = function(id){
    $scope.algo = Config.getAlgo(id);
    $scope.algoDetail = true;
    $scope.algosList = false;
  }

  $scope.getPool = function(id){
    $scope.pool = Config.getPool(id);
    $scope.poolDetail = true;
    $scope.poolsList = false;
  }
  
  $scope.getPort = function(id){
    $scope.port = Config.getPort(id);
    $scope.portDetail = true;
    $scope.portsList = false;
  }
  
  $scope.getAddress = function(id){
    $scope.address = Config.getAddress(id);
    $scope.addressDetail = true;
    $scope.addressesList = false;
  }
  
  $scope.getCoin = function(id){
    $scope.coin = Config.getCoin(id);
    $scope.coinDetail = true;
    $scope.coinsList = false;
  }

  $scope.getMiner = function(id){
    $scope.miner = Config.getMiner(id);
    $scope.minerDetail = true;
    $scope.minersList = false;
  }
  
  $scope.getRun = function(id){
    $scope.run = Config.getRun(id);
    $scope.runDetail = true;
    $scope.runsList = false;
  }

  $scope.cancelAlgo = function(){
    $scope.algoDetail = false;
    $scope.algosList = true;
    $scope.algo = null;
  }

  $scope.cancelPool = function(){
    $scope.poolDetail = false;
    $scope.poolsList = true;
    $scope.pool = null;
  }
  
  $scope.cancelPort = function(){
    $scope.portDetail = false;
    $scope.portsList = true;
    $scope.port = null;
  }
  
  $scope.cancelAddress = function(){
    $scope.addressDetail = false;
    $scope.addressesList = true;
    $scope.address = null;
  }

  $scope.cancelMiner = function(){
    $scope.minerDetail = false;
    $scope.minersList = true;
    $scope.miner = null;
  }
  
  $scope.cancelRun = function(){
    $scope.runDetail = false;
    $scope.runsList = true;
    $scope.run = null;
  }

  $scope.saveAlgo = function(){
    Config.saveAlgo($scope.algo);
    $scope.getAlgos();
    $scope.algoDetail = false;
    $scope.algosList = true;
    $scope.algo = null;
  }

  $scope.savePool = function(){
    Config.savePool($scope.pool);
    $scope.getPools();
    $scope.poolDetail = false;
    $scope.poolsList = true;
    $scope.pool = null;
  }
  
  $scope.savePort = function(){
    Config.savePort($scope.port);
    $scope.getPorts();
    $scope.portDetail = false;
    $scope.portsList = true;
    $scope.port = null;
  }
  
  $scope.saveAddress = function(){
    Config.saveAddress($scope.address);
    $scope.getAddresses();
    $scope.addressDetail = false;
    $scope.addressesList = true;
    $scope.address = null;
  }
  
  $scope.saveCoin = function(){
    Config.saveCoin($scope.coin);
    $scope.getCoins();
    $scope.coinDetail = false;
    $scope.coinsList = true;
    $scope.coin = null;
  }

  $scope.saveMiner = function(){
    Config.saveMiner($scope.miner);
    $scope.getMiners();
    $scope.minerDetail = false;
    $scope.minersList = true;
    $scope.miner = null;
  }
  
  $scope.saveRun = function(){
    Config.saveRun($scope.run);
    $scope.getRuns();
    $scope.runDetail = false;
    $scope.runsList = true;
    $scope.run = null;
  }
  
  $scope.saveConfig = function(){
	Config.saveConfigFile($scope.config);
  }

  $scope.getConfigVar = function(){
    $scope.config = Config.getConfigVar();
  }

  $scope.getAlgos = function(){
    $scope.algos = Config.getAlgos();
  }

  $scope.getPools = function(){
    $scope.pools = Config.getPools();
  }
  
  $scope.getPorts = function(){
    $scope.ports = Config.getPorts();
  }
  
  $scope.getAddresses = function(){
    $scope.addresses = Config.getAddresses();
  }
  
  $scope.getCoins = function(){
    $scope.coins = Config.getCoins();
  }

  $scope.getMiners = function(){
    $scope.miners = Config.getMiners();
  }
  
  $scope.getRuns = function(){
    $scope.runs = Config.getRuns();
  }

  Config.loadConfigFile() 
   .then(function(data) {
      $scope.config = data;
	  $scope.getAlgos();
      $scope.getPools();
      $scope.getPorts();
	  $scope.getAddresses();
	  $scope.getCoins();
      $scope.getMiners();
	  $scope.getRuns();
   });
  
});