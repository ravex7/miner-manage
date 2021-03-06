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
        "name" : "bitcore"
      },
      {
        "id" : 2,
        "name" : "phi"
      },
      {
        "id" : 3,
        "name" : "skunk"
      },
      {
        "id" : 4,
        "name" : "xevan"
      },
      {
        "id" : 5,
        "name" : "lyra2v2"
      },
      {
        "id" : 6,
        "name" : "neoscrypt"
      },
      {
        "id" : 7,
        "name" : "nist5"
      },
      {
        "id" : 8,
        "name" : "x11"
      }
    ],
	"ports" : [
      {
		"id" : 1,
        "port" : 3556
      },
      {
		"id" : 2,
        "port" : 8333
      },
      {
		"id" : 3,
        "port" : 8433
      },
      {
		"id" : 4,
        "port" : 3739
      },
      {
		"id" : 5,
        "port" : 4533
      },
      {
		"id" : 6,
        "port" : 14233
      },
      {
		"id" : 7,
        "port" : 3833
      }
    ],
	"addresses" : [
      { 
        "id" : 1,
        "name" : "BTC",
		"source" : "BX",
        "address" : "3MJH6zFkwxhGYz2H8j59gYpCcnKAUjsJK7"
      },
      { 
        "id" : 2,
        "name" : "LUX",
		"source" : "l3za",
        "address" : "Lag3ink8cbBAJcmToS8jp3VCeqV8rZfENQ"
      },
      { 
        "id" : 3,
        "name" : "QBIC",
		"source" : "l3za",
        "address" : "GS5fmDa2Xqb59nBS4enwTRYpNMhCF1SyGM"
      },
      { 
        "id" : 4,
        "name" : "DIN",
		"source" : "l3za",
        "address" : "DQJ6Y5Ld2s3ovAEW9gHB5m1EW18AreCNF5"
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
      },
      {
        "id" : 11,
        "algo" : 8,
        "name" : "BTC",
        "fullName" : "Bitcoin"
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
    ],
	"runs" : [
      
    ]
  }
)
