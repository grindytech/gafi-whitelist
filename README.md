# BNB-NODE

  Binance smart chain is a hard fork of Ethereum, bnb-node using web3 to communicate with the chain.

# Table of contents

- [Quick Start](#quick-start)
  - [Requirements](#requirements)
  - [Reference](#reference)
  - [Installation](#installation)
- [BNB API](#BNB_API)
  - [new_address](#new_address)
  - [get_balance](#get_balance)
  - [transfer](#transfer)
  - [get_tx_by_txhash](#get_tx_by_txhash)
  - [get_tx_by_block](#get_tx_by_block)
  - [get_tx_by_address](#get_tx_by_address)
  - [get_tx_range](#get_tx_range)
  - [get_block_height](#get_block_height)
 - [BEP2 Token API](#BEP2_Token_API)
   - [new_token](#new_token)
   - [get_token_balance](#get_token_balance)
   - [transfer_token](#transfer_token)

## Quick Start

 ```
 
  $ git clone https://github.com/mutobui/bnb-node.git
  
  $ cd bnb-node
  
  $ npm i
  
  $ npm run dev
  
  new tab
  
  $ npm run init-privatenet
  
  $ npm run privatenet
 
 ```

### Requirements

OS: Linux

Development environment: NodeJs


### Reference
- [Web3](https://web3js.readthedocs.io/en/v1.3.0/)
- [Ethereum privatenet configuration](https://geth.ethereum.org/docs/interface/private-network)
- [NetworkId](https://chainid.network/)
- [Binance Smart Chain](https://docs.binance.org/smart-chain/developer/create-wallet.html)
- [RPC API](https://eth.wiki/json-rpc/API)

### Installation

- Run BNB node
```
$ git clone https://github.com/mutobui/bnb-node.git
$ cd bnb-node
$ npm i

$ npm start

Or deamon

$ npm run dev

```

- Run privatenet chain

```
  $ npm run init-privatenet
  
  $ npm run privatenet
```

- Run testnet chain
```  
   $ npm run init-testnet
  
   $ npm run testnet
```
- Run mainnet chain
```
  $ npm run init-mainnet
  
  $ npm run mainnet
```

- Notices:

  Mainnet and Testnet take a while for syncing, use api: /block/syncing to check status.
  
  ```
  Syncing:
  
  localhost:5000/block/syncing
  {
    "currentBlock": 1119014,
    "highestBlock": 3600387,
    "knownStates": 0,
    "pulledStates": 0,
    "startingBlock": 935661
  }
  
  Completed:
  {
    false
  }
  ```

## BNB_API

### new_address

```
url: /account

example: localhost:5000/account

method: POST

request: 
{
    
}

successResponse:
{
    "Address": "0x38041400ac65f51ADF2aB666AA8B531C44cc36BD",
    "PrivateKey": "0x921b389a26dc4956e1bdb6bf5c018ee12354217c07ca6ece65ff564ae3cf7afb"
}
```

| ResponseField  | Type | Description |
| ------------- | ------------- | ------------- |
| Address | string  |  One of address in account|
| PrivateKey | string  |  private key of account|

### get_balance

 ```
url: localhost:5000/account?address

example: localhost:5000/account/0x04e3a36d426C62419aF8Cb308A7dcE727717A5F9

method: GET

description: This is get balance by address 

successResponse:
{
    "wei": "999999999999999999999999397000"
}
```
| Url RequestField  | Type | Description |
| ------------- | ------------- | ------------- |
| address | string  |   address of the account |

| ResponseField  | Type | Description |
| ------------- | ------------- | ------------- |
| wei | string  |  amount of wei same as Ethereum  |


### transfer

 ```
url: /tx

example: localhost:5000/tx

method: POST

request:
{
    "PrivateKey": "a753824b98a763b1e3509bec273f72ab30e274953e212b0654b5ebb5c34ac71c",
    "ToAddress": "0xF09aa515d4386b6Db725Ce12C65a04Ff96a27866",
    "Amount": "1000"
    "GasLimit": "21000",
    "GasPrice": "3000000",
    "Nonce": 1
}

successResponse:
{
    "blockHash": "0x442af401714109b4f91c22b81d737181139f9f7e46a66aff09774767519c9ec0",
    "blockNumber": 4315,
    "from": "0x04e3a36d426C62419aF8Cb308A7dcE727717A5F9",
    "gas": 210000,
    "gasPrice": "0",
    "hash": "0x31fde4ad267f2a7249e5febbd6126723c788937648c1db04ff86913b1797364e",
    "input": "0x",
    "nonce": 13,
    "to": "0xF09aa515d4386b6Db725Ce12C65a04Ff96a27866",
    "transactionIndex": 0,
    "value": "1000",
    "confirmations": 0
}
```
| Url RequestField  | Type | Description |
| ------------- | ------------- | ------------- |
| PrivateKey | string  |   private key |
| ToAddress | string  |   to address |
| Amount| string | amount of wei |
| GasLimmit (optional)| string | default: get gasLimit estimate by web3 |
| GasPrice (optional)| string | default: get gasPrice estimate by web3 |
| Nonce (optional)| number | in case transaction is pending|


| ResponseField  | Type | Description |
| ------------- | ------------- | ------------- |
| blockHash | string  |  transaction id  |
| blockNumber | number  |  block number  |
| from | string  |  sender  |
| gas | string  |  gas limit  |
| gasPrice | string  |  gas price  |
| hash | hex string  |  transaction id  |
| input | hex string  |  message  |
| nonce | number  |  number once  |
| to | hex string  |  receiver  |
| transactionIndex | number  |  tx index in block  |
| value | string  |  number of wei  |
| confirmations | number  | number of confirmations |


### get_tx_by_txhash

```
url: /tx/txHash/:txHash

example: localhost:5000/tx/txhash/0x10a03d0dfb42c9ab530156cd3fa8ce91d8b15320b2583d60c6849c8729c69025

method: GET

successResponse: Tx detail

```
| Url RequestField  | Type | Description |
| ------------- | ------------- | ------------- |
| txHash | string  |   Transaction id |

### get_tx_by_block

 ```
url: /tx/block/:blockHeight

example: localhost:5000/tx/block/460

method: GET

successResponse: list tx detail
```

| Url RequestField  | Type | Description |
| ------------- | ------------- | ------------- |
| block height | string  |   block height |

### get_tx_by_address
 ```
url: /tx/address?address

example: localhost:5000/tx/address/0x04e3a36d426C62419aF8Cb308A7dcE727717A5F9

method: GET

successResponse: 'list of transactions related with the address'

notices: Consider when using this api, you should use the browser to test this api and this will take a while.

 ```
 
 | Url RequestField  | Type | Description |
| ------------- | ------------- | ------------- |
| address | string  |   address of the account |

### get_tx_range

```
url: /tx/range?start&end

example: localhost:5000/tx/range?start=460&end=463

method: GET

successResponse: 'list of transactions detail'
```
| Url RequestField  | Type | Description |
| ------------- | ------------- | ------------- |
| start | int  |   start of the block height |
| end | int  |   end of the block height |

### get_block_height

 ```
url: /block/height

example: localhost:5000/block/height

method: GET

successResponse:
123

```

| ResponseField  | Type | Description |
| ------------- | ------------- | ------------- |
| data | nunmber  |  current block height  |

## BEP2_Token_API

  ### new_token

 ```
url: /token

example: localhost:5000/token

method: POST

request:
{
    "PrivateKey": "493dd56119b01e719e604d46c0da7bfdffc901a4dd8131efc05000f4007d1e96",
    "Name": "Muto",
    "Symbol": "MTO",
    "Decimals": 18,
    "TotalSupply": "10000000000000000000000"
}

successResponse:
{
    "blockHash": "0x0a9c0467ceba5511b684761b23afd97d560c92185dbfe83e24ee832c3875f565",
    "blockNumber": 3739935,
    "contractAddress": "0xD1bA0e11455c868A5dEAb8aE2732b863EA78fEFc",
    "cumulativeGasUsed": 1580877,
    "from": "0x2d73e31120bda255fba09c748571ea57610995ca",
    "gasUsed": 1580877,
    "logs": [
        {
            "address": "0xD1bA0e11455c868A5dEAb8aE2732b863EA78fEFc",
            "topics": [
                "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
                "0x0000000000000000000000000000000000000000000000000000000000000000",
                "0x0000000000000000000000002d73e31120bda255fba09c748571ea57610995ca"
            ],
            "data": "0x",
            "blockNumber": 3739935,
            "transactionHash": "0x18ea5ae09f0f2f640afaca93762e7907a508879945187df1e7a7b4c872ffe0be",
            "transactionIndex": 0,
            "blockHash": "0x0a9c0467ceba5511b684761b23afd97d560c92185dbfe83e24ee832c3875f565",
            "logIndex": 0,
            "removed": false,
            "id": "log_ea1cebae"
        },
        {
            "address": "0xD1bA0e11455c868A5dEAb8aE2732b863EA78fEFc",
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x0000000000000000000000000000000000000000000000000000000000000000",
                "0x0000000000000000000000002d73e31120bda255fba09c748571ea57610995ca"
            ],
            "data": "0x00000000000000000000000000000000000000000000021e19e0c9bab2400000",
            "blockNumber": 3739935,
            "transactionHash": "0x18ea5ae09f0f2f640afaca93762e7907a508879945187df1e7a7b4c872ffe0be",
            "transactionIndex": 0,
            "blockHash": "0x0a9c0467ceba5511b684761b23afd97d560c92185dbfe83e24ee832c3875f565",
            "logIndex": 1,
            "removed": false,
            "id": "log_1a77e052"
        }
    ],
    "logsBloom": "0x00800000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000080000000000004000000000000000000000008000800000001000000000000000000000000000000000000020000000000000000000800000000000000000000000010000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000002000000000000000000000000000000000000000000000000000020000000000000000000000000000200000000000000000000000000000000000000",
    "status": true,
    "to": null,
    "transactionHash": "0x18ea5ae09f0f2f640afaca93762e7907a508879945187df1e7a7b4c872ffe0be",
    "transactionIndex": 0
}
```
| Url RequestField  | Type | Description |
| ------------- | ------------- | ------------- |
| PrivateKey | string  |   private key |
| Name | string  |   token name |
| Symbol| string | symbol of token |
| Decimals| number | token decimals|
| TotalSupply| string | token total supply |

| ResponseField  | Type | Description |
| ------------- | ------------- | ------------- |
| contractAddress | string  |  token address  |

### get_token_balance

 ```
url: localhost:5000/account/token?Address?TokenAddress

example: localhost:5000/account/token?Address=0x04e3a36d426C62419aF8Cb308A7dcE727717A5F9&TokenAddress=0xD1bA0e11455c868A5dEAb8aE2732b863EA78fEFc

method: GET

successResponse:
{
    "value": "40000000000000000000"
}
```
| Url RequestField  | Type | Description |
| ------------- | ------------- | ------------- |
| address | string  |   address of the account |

| ResponseField  | Type | Description |
| ------------- | ------------- | ------------- |
| value | string  |  value  |

### transfer_token

 ```
url: /token/tx

example: localhost:5000/token/tx

method: POST

request:
{
    "PrivateKey": "493dd56119b01e719e604d46c0da7bfdffc901a4dd8131efc05000f4007d1e96",
    "TokenAddress": "0xD1bA0e11455c868A5dEAb8aE2732b863EA78fEFc",
    "ToAddress": "0x04e3a36d426C62419aF8Cb308A7dcE727717A5F9",
    "Value": "10000000000000000000",
    "GasLimit": "21000",
    "GasPrice": "3000000",
    "Nonce": 1
}

successResponse:
{
    "blockHash": "0x0ea234adec8d577416bfe97d45da229d0de0476808232bfb8a338da040c886d9",
    "blockNumber": 3740706,
    "from": "0x2D73e31120bDa255fBa09c748571EA57610995ca",
    "gas": 36284,
    "gasPrice": "20000000000",
    "hash": "0xedf15bbbc2408ef69ca2e03d08e02caf9c5ecdbcbc825a6c13965f93c335be80",
    "input": "0xa9059cbb00000000000000000000000004e3a36d426c62419af8cb308a7dce727717a5f90000000000000000000000000000000000000000000000008ac7230489e80000",
    "nonce": 10,
    "to": "0xD1bA0e11455c868A5dEAb8aE2732b863EA78fEFc",
    "transactionIndex": 0,
    "value": "0",
    "confirmations": 0
}
```
| Url RequestField  | Type | Description |
| ------------- | ------------- | ------------- |
| PrivateKey | string  |   private key |
| TokenAddress | string  |   token address |
| ToAddress | string  |   to address |
| Value| string | amount of token |
| GasLimmit (optional)| string | default: get gasLimit estimate by web3 |
| GasPrice (optional)| string | default: get gasPrice estimate by web3 |
| Nonce (optional)| number | in case transaction is pending|

| ResponseField  | Type | Description |
| ------------- | ------------- | ------------- |
| blockHash | string  |  transaction id  |
| blockNumber | number  |  block number  |
| from | string  |  sender  |
| gas | string  |  gas limit  |
| gasPrice | string  |  gas price  |
| hash | hex string  |  transaction id  |
| input | hex string  |  message  |
| nonce | number  |  number once  |
| to | hex string  |  token smart contract address  |
| transactionIndex | number  |  tx index in block  |
| value | string  |  number of wei  |
| confirmations | number  | number of confirmations |


