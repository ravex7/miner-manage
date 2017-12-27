angular.module('project').value('defaultConfig', 
  {
    "default" : {
      "minerName" : "miner"
    },
    "configs" : [
      {
        "minerName" : "miner"
      }
    ],
    "pools" : [
      { 
        "id" : 1,
        "name" : "cryptopros",
        "url" : "pool.cryptopros.us"
      },
      { 
        "id" : 2,
        "name" : "bsod",
        "url" : "pool.bsod.pw"
      },
      { 
        "id" : 3,
        "name" : "phi",
        "url" : "pool1.phi-phi-pool.net"
      },
      { 
        "id" : 4,
        "name" : "friends-master",
        "url" : "pool.friends-master.net"
      }
    ],
    "algos" : [
      {
        "id" : 1,
        "name" : "bitcore",
        "port" : 3556
      },
      {
        "id" : 2,
        "name" : "phi",
        "port" : 8333
      },
      {
        "id" : 3,
        "name" : "skunk",
        "port" : 8433
      },
      {
        "id" : 4,
        "name" : "xevan",
        "port" : 3739
      },
      {
        "id" : 5,
        "name" : "lyra2v2",
        "port" : 4533
      },
      {
        "id" : 6,
        "name" : "neoscrypt",
        "port" : 14233
      },
      {
        "id" : 7,
        "name" : "nist5",
        "port" : 3833
      }
    ],
    "coins" : [
      {
        "id" : 1,
        "algo" : 1,
        "name" : "BTX",
        "fullName" : "Bitcore"
      },
      {
        "id" : 2,
        "algo" : 2,
        "name" : "LUX",
        "fullName" : "Luxcoin"
      },
      {
        "id" : 3,
        "algo" : 3,
        "name" : "ALTCOM",
        "fullName" : "ALT Community"
      },
      {
        "id" : 4,
        "algo" : 4,
        "name" : "BSD",
        "fullName" : "BitSend"
      },
      {
        "id" : 5,
        "algo" : 4,
        "name" : "XLR",
        "fullName" : "Solaris"
      },
      {
        "id" : 6,
        "algo" : 4,
        "name" : "NNC",
        "fullName" : "NANU"
      },
      {
        "id" : 7,
        "algo" : 5,
        "name" : "ORE",
        "fullName" : "Galactrum"
      },
      {
        "id" : 8,
        "algo" : 6,
        "name" : "CRC",
        "fullName" : "Crowd Coin"
      },
      {
        "id" : 9,
        "algo" : 6,
        "name" : "GOA",
        "fullName" : "GoaCoin"
      },
      {
        "id" : 10,
        "algo" : 7,
        "name" : "BWK",
        "fullName" : "Bulwark"
      }
    ],
    "miners" : [
      { 
        "id" : 1,
        "name" : "ccMiner release 8.17(KlausT-mod)",
        "path" : "C:\\Users\\Miner\\Downloads\\ccminer-817-cuda91-x64"
      },
      { 
        "id" : 2,
        "name" : "ccminer-xevan",
        "path" : "C:\\Users\\Miner\\Downloads\\ccminer-xevan"
      },
      { 
        "id" : 3,
        "name" : "bitcore-spmod2",
        "path" : "C:\\Users\\Miner\\Downloads\\bitcore-spmod2"
      },
      { 
        "id" : 4,
        "name" : "ccminer-alexis78-ms2013-cuda7.5",
        "path" : "C:\\Users\\Miner\\Downloads\\ccminer-alexis78-ms2013-cuda7.5"
      }
    ]
  }
)