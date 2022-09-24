/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ZkSocialRecoveryWallet,
  ZkSocialRecoveryWalletInterface,
} from "../../../contracts/ZkSocialRecoveryWallet.sol/ZkSocialRecoveryWallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_hashCheckVerifier",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_ownerPasswordHash",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_trustees",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_passwordHashes",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_thresholdForRecovery",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_root",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_otpVerifier",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newProposedOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trusteeInitializer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currRecoveryRound",
        type: "uint256",
      },
    ],
    name: "NewRecoveryProcedure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "Owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "RecoveryRound",
        type: "uint256",
      },
    ],
    name: "RecoveryCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "RecoveryRound",
        type: "uint256",
      },
    ],
    name: "RecoveryExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trustee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "RecoveryRound",
        type: "uint256",
      },
    ],
    name: "VotedInRecovery",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "Input",
        type: "uint256[1]",
      },
      {
        internalType: "uint256",
        name: "recoveryRoundNumber",
        type: "uint256",
      },
    ],
    name: "cancelRecovery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRecoveryNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "Input",
        type: "uint256[1]",
      },
      {
        internalType: "uint256",
        name: "recoveryRoundNumber",
        type: "uint256",
      },
    ],
    name: "executeRecoveryChange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2]",
        name: "input",
        type: "uint256[2]",
      },
      {
        internalType: "address",
        name: "callee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "executeTxn",
    outputs: [
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isRecoveryOn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "Input",
        type: "uint256[1]",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "startRecovery",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "Input",
        type: "uint256[1]",
      },
      {
        internalType: "uint256",
        name: "recoveryRoundNumber",
        type: "uint256",
      },
    ],
    name: "voteInRecovery",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620024243803806200242483398101604081905262000034916200046e565b6001600160a01b038716620000905760405162461bcd60e51b815260206004820152601560248201527f5a65726f2061646472657373207665726966696572000000000000000000000060448201526064015b60405180910390fd5b8351855114620000e35760405162461bcd60e51b815260206004820152601f60248201527f547275737465657320616e6420686173686573206c656e677468206469666600604482015260640162000087565b82855110156200014b5760405162461bcd60e51b815260206004820152602c60248201527f5468726573686f6c642069732067726561746572207468616e206e756d62657260448201526b206f6620747275737465657360a01b606482015260840162000087565b600080546001600160a01b0389166001600160a01b0319918216178255600180549091163317905560028790555b8551811015620002e457600560008783815181106200019c576200019c62000582565b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff1615620002125760405162461bcd60e51b815260206004820152601960248201527f4475706c6963617465207472757374656520696e206c69737400000000000000604482015260640162000087565b6001600560008884815181106200022d576200022d62000582565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff02191690831515021790555084818151811062000281576200028162000582565b602002602001015160066000888481518110620002a257620002a262000582565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020819055508080620002db9062000598565b91505062000179565b50826003819055508181604051620002fc9062000361565b9182526001600160a01b03166020820152604001604051809103906000f0801580156200032d573d6000803e3d6000fd5b50600960016101000a8154816001600160a01b0302191690836001600160a01b0316021790555050505050505050620005c0565b6105348062001ef083390190565b80516001600160a01b03811681146200038757600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715620003cd57620003cd6200038c565b604052919050565b60006001600160401b03821115620003f157620003f16200038c565b5060051b60200190565b600082601f8301126200040d57600080fd5b81516020620004266200042083620003d5565b620003a2565b82815260059290921b840181019181810190868411156200044657600080fd5b8286015b848110156200046357805183529183019183016200044a565b509695505050505050565b600080600080600080600060e0888a0312156200048a57600080fd5b62000495886200036f565b60208981015160408b01519299509750906001600160401b0380821115620004bc57600080fd5b818b0191508b601f830112620004d157600080fd5b8151620004e26200042082620003d5565b81815260059190911b8301840190848101908e8311156200050257600080fd5b938501935b828510156200052b576200051b856200036f565b8252938501939085019062000507565b60608e0151909a5094505050808311156200054557600080fd5b5050620005558a828b01620003fb565b9450506080880151925060a088015191506200057460c089016200036f565b905092959891949750929550565b634e487b7160e01b600052603260045260246000fd5b600060018201620005b957634e487b7160e01b600052601160045260246000fd5b5060010190565b61192080620005d06000396000f3fe60806040526004361061009a5760003560e01c8063789bcd08116100695780639c62291a1161004e5780639c62291a14610209578063b21fa1ae14610223578063e9c4bfe71461024357600080fd5b8063789bcd08146101a15780638da5cb5b146101d157600080fd5b8063037133f1146100a6578063150b7a02146100dc57806337dc1813146101515780634f20804b1461017357600080fd5b366100a157005b600080fd5b3480156100b257600080fd5b506100c66100c13660046114b9565b610259565b6040516100d39190611574565b60405180910390f35b3480156100e857600080fd5b506101206100f736600461158e565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100d3565b34801561015d57600080fd5b5061017161016c3660046116bc565b61043a565b005b34801561017f57600080fd5b5061019361018e36600461171f565b6106bb565b6040519081526020016100d3565b3480156101ad57600080fd5b506101c16101bc3660046116bc565b610b68565b60405190151581526020016100d3565b3480156101dd57600080fd5b506001546101f1906001600160a01b031681565b6040516001600160a01b0390911681526020016100d3565b34801561021557600080fd5b506009546101c19060ff1681565b34801561022f57600080fd5b5061017161023e3660046116bc565b610f2e565b34801561024f57600080fd5b5061019360045481565b6001546060906001600160a01b031633146102a75760405162461bcd60e51b81526020600482015260096024820152682737ba1027bbb732b960b91b60448201526064015b60405180910390fd5b6009546040517fa9f3402c0000000000000000000000000000000000000000000000000000000081526101009091046001600160a01b03169063a9f3402c906102fa908a908a908a908a906004016117e2565b6020604051808303816000875af1158015610319573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033d9190611822565b6103895760405162461bcd60e51b815260206004820152600c60248201527f50726f6f66206661696c65640000000000000000000000000000000000000000604482015260640161029e565b600080846001600160a01b03168460405160006040518083038185875af1925050503d80600081146103d7576040519150601f19603f3d011682016040523d82523d6000602084013e6103dc565b606091505b50915091508161042e5760405162461bcd60e51b815260206004820152601660248201527f65787465726e616c2063616c6c20726576657274656400000000000000000000604482015260640161029e565b98975050505050505050565b6001546001600160a01b031633146104805760405162461bcd60e51b81526020600482015260096024820152682737ba1027bbb732b960b91b604482015260640161029e565b60095460ff166104d25760405162461bcd60e51b815260206004820152601860248201527f5265636f7665727920686173206e6f7420737461727465640000000000000000604482015260640161029e565b6000546040516343753b4d60e01b815286918691869186916001600160a01b03909116906343753b4d90610510908790879087908790600401611844565b602060405180830381865afa15801561052d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105519190611822565b61059d5760405162461bcd60e51b815260206004820152601760248201527f50617373776f72642070726f6f6620696e76616c696421000000000000000000604482015260640161029e565b835160009081526008602052604090205460ff16156105ee5760405162461bcd60e51b815260206004820152600d60248201526c141c9bdbd9881a5cc81d5cd959609a1b604482015260640161029e565b6002548651146106315760405162461bcd60e51b815260206004820152600e60248201526d15dc9bdb99c81c185cdcdddbdc9960921b604482015260640161029e565b6009805460ff191690556001546040518681526001600160a01b03909116907f500ec1d4b692d3c788bfd78a898de379cfd93ab8177575efc7593f87bd051a079060200160405180910390a260016008600086815b6020020151815260200190815260200160002060006101000a81548160ff021916908315150217905550505050505050505050565b3360009081526005602052604081205460ff166107085760405162461bcd60e51b815260206004820152600b60248201526a4e6f74205472757374656560a81b604482015260640161029e565b60095460ff161561075b5760405162461bcd60e51b815260206004820152601660248201527f5265636f7665727920697320696e2070726f6365737300000000000000000000604482015260640161029e565b6000546040516343753b4d60e01b815287918791879187916001600160a01b03909116906343753b4d90610799908790879087908790600401611844565b602060405180830381865afa1580156107b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107da9190611822565b6108265760405162461bcd60e51b815260206004820152601760248201527f50617373776f72642070726f6f6620696e76616c696421000000000000000000604482015260640161029e565b835160009081526008602052604090205460ff16156108775760405162461bcd60e51b815260206004820152600d60248201526c141c9bdbd9881a5cc81d5cd959609a1b604482015260640161029e565b6108db6040518060400160405280600c81526020017f747275737465652068617368000000000000000000000000000000000000000081525060066000336001600160a01b03166001600160a01b0316815260200190815260200160002054611282565b60408051808201909152600581527f496e7075740000000000000000000000000000000000000000000000000000006020820152875161091b9190611282565b3360009081526006602052604090205487511461096b5760405162461bcd60e51b815260206004820152600e60248201526d15dc9bdb99c81c185cdcdddbdc9960921b604482015260640161029e565b6001600160a01b0386166109c15760405162461bcd60e51b815260206004820152600c60248201527f5a65726f20616464726573730000000000000000000000000000000000000000604482015260640161029e565b6001600160a01b03861660009081526007602052604090205460ff1615610a505760405162461bcd60e51b815260206004820152602260248201527f4f776e65722073686f756c64206e6f742062652061207061737420616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161029e565b60048054906000610a60836118a1565b90915550506004546000908152600a6020526040812060018101805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038a16179055805490918290610aaf836118a1565b90915550503360008181526002830160209081526040918290208054600160ff19918216811790925560098054909116909117905560045491519182526001600160a01b038a16917f4ae23dc2e5f7892600076b48a0cfdbcc206c2aba4e323da13765339b2b8978d8910160405180910390a360045495505060016008600086815b6020020151815260200190815260200160002060006101000a81548160ff0219169083151502179055505050505095945050505050565b3360009081526005602052604081205460ff16610bb55760405162461bcd60e51b815260206004820152600b60248201526a4e6f74205472757374656560a81b604482015260640161029e565b60095460ff16610c075760405162461bcd60e51b815260206004820152601860248201527f5265636f7665727920686173206e6f7420737461727465640000000000000000604482015260640161029e565b6000546040516343753b4d60e01b815287918791879187916001600160a01b03909116906343753b4d90610c45908790879087908790600401611844565b602060405180830381865afa158015610c62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c869190611822565b610cd25760405162461bcd60e51b815260206004820152601760248201527f50617373776f72642070726f6f6620696e76616c696421000000000000000000604482015260640161029e565b835160009081526008602052604090205460ff1615610d235760405162461bcd60e51b815260206004820152600d60248201526c141c9bdbd9881a5cc81d5cd959609a1b604482015260640161029e565b33600090815260066020526040902054875114610d735760405162461bcd60e51b815260206004820152600e60248201526d15dc9bdb99c81c185cdcdddbdc9960921b604482015260640161029e565b610db16040518060400160405280600581526020017f48657265310000000000000000000000000000000000000000000000000000008152506112f9565b600454861115610e035760405162461bcd60e51b815260206004820152601b60248201527f57726f6e67205265636f7665727920726f756e64206e756d6265720000000000604482015260640161029e565b610e416040518060400160405280600481526020017f48657265000000000000000000000000000000000000000000000000000000008152506112f9565b6000868152600a60209081526040808320338452600281019092529091205460ff1615610eb05760405162461bcd60e51b815260206004820152601560248201527f5472757374656520616c726561647920766f7465640000000000000000000000604482015260640161029e565b8054816000610ebe836118a1565b909155505033600081815260028301602052604090819020805460ff1916600190811790915590519097507f7f7906f4f6e51fac746e81b4885d9775eb44445765139416bcd03b12b262968a90610f18908a815260200190565b60405180910390a2506001600860008681610b31565b3360009081526005602052604090205460ff16610f7b5760405162461bcd60e51b815260206004820152600b60248201526a4e6f74205472757374656560a81b604482015260640161029e565b60095460ff16610fcd5760405162461bcd60e51b815260206004820152601860248201527f5265636f7665727920686173206e6f7420737461727465640000000000000000604482015260640161029e565b6000546040516343753b4d60e01b815286918691869186916001600160a01b03909116906343753b4d9061100b908790879087908790600401611844565b602060405180830381865afa158015611028573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104c9190611822565b6110985760405162461bcd60e51b815260206004820152601760248201527f50617373776f72642070726f6f6620696e76616c696421000000000000000000604482015260640161029e565b835160009081526008602052604090205460ff16156110e95760405162461bcd60e51b815260206004820152600d60248201526c141c9bdbd9881a5cc81d5cd959609a1b604482015260640161029e565b336000908152600660205260409020548651146111395760405162461bcd60e51b815260206004820152600e60248201526d15dc9bdb99c81c185cdcdddbdc9960921b604482015260640161029e565b6000858152600a602052604090206003548154101561119a5760405162461bcd60e51b815260206004820152601060248201527f566f746573204e6f7420656e6f75676800000000000000000000000000000000604482015260640161029e565b600181810180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001781556009805460ff199081169091558254915473ffffffffffffffffffffffffffffffffffffffff1983166001600160a01b03918216908117855560009081526007602052604090819020805490931685179092559254905191831692169082907fcbaa7c7c351e2d5655fc08d9c383adcf4736af160c800b53df1f1dd221f826c89061126a908b815260200190565b60405180910390a35060019050600860008681610686565b6112f582826040516024016112989291906118c8565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fb60e72cc0000000000000000000000000000000000000000000000000000000017905261136d565b5050565b61136a8160405160240161130d9190611574565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac0000000000000000000000000000000000000000000000000000000017905261136d565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156113c7576113c761138e565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156113f6576113f661138e565b604052919050565b600082601f83011261140f57600080fd5b6114176113a4565b80604084018581111561142957600080fd5b845b8181101561144357803584526020938401930161142b565b509095945050505050565b600082601f83011261145f57600080fd5b6114676113a4565b80608084018581111561147957600080fd5b845b818110156114435761148d87826113fe565b845260209093019260400161147b565b80356001600160a01b03811681146114b457600080fd5b919050565b60008060008060008061018087890312156114d357600080fd5b6114dd88886113fe565b95506114ec886040890161144e565b94506114fb8860c089016113fe565b935061150b8861010089016113fe565b925061151a610140880161149d565b915061016087013590509295509295509295565b6000815180845260005b8181101561155457602081850181015186830182015201611538565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000611587602083018461152e565b9392505050565b600080600080608085870312156115a457600080fd5b6115ad8561149d565b935060206115bc81870161149d565b935060408601359250606086013567ffffffffffffffff808211156115e057600080fd5b818801915088601f8301126115f457600080fd5b8135818111156116065761160661138e565b611618601f8201601f191685016113cd565b9150808252898482850101111561162e57600080fd5b808484018584013760008482840101525080935050505092959194509250565b600082601f83011261165f57600080fd5b604051602080820182811067ffffffffffffffff821117156116835761168361138e565b604052818482018681111561169757600080fd5b855b818110156116b05780358352918301918301611699565b50929695505050505050565b600080600080600061014086880312156116d557600080fd5b6116df87876113fe565b94506116ee876040880161144e565b93506116fd8760c088016113fe565b925061170d87610100880161164e565b94979396509194610120013592915050565b6000806000806000610140868803121561173857600080fd5b61174287876113fe565b9450611751876040880161144e565b93506117608760c088016113fe565b925061177087610100880161164e565b915061177f610120870161149d565b90509295509295909350565b8060005b60028110156117ae57815184526020938401939091019060010161178f565b50505050565b8060005b60028110156117ae576117cc84835161178b565b60409390930192602091909101906001016117b8565b61014081016117f1828761178b565b6117fe60408301866117b4565b61180b60c083018561178b565b61181961010083018461178b565b95945050505050565b60006020828403121561183457600080fd5b8151801515811461158757600080fd5b6101208101611853828761178b565b61186060408301866117b4565b61186d60c083018561178b565b61010082018360005b6001811015611895578151835260209283019290910190600101611876565b50505095945050505050565b6000600182016118c157634e487b7160e01b600052601160045260246000fd5b5060010190565b6040815260006118db604083018561152e565b9050826020830152939250505056fea26469706673582212204c820cf2da202d2b86698721a030178ce63b6f8e83a2afd6ca5e50a8167da39464736f6c6343000811003360c060405234801561001057600080fd5b5060405161053438038061053483398101604081905261002f91610046565b6080919091526001600160a01b031660a052610083565b6000806040838503121561005957600080fd5b825160208401519092506001600160a01b038116811461007857600080fd5b809150509250929050565b60805160a05161048d6100a7600039600061016101526000605e015261048d6000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063a9f3402c14610030575b600080fd5b61004361003e3660046102da565b610057565b604051901515815260200160405180910390f35b80516000907f0000000000000000000000000000000000000000000000000000000000000000146100cf5760405162461bcd60e51b815260206004820152600e60248201527f496e636f6f7265637420726f6f7400000000000000000000000000000000000060448201526064015b60405180910390fd5b6000546020830151116101245760405162461bcd60e51b815260206004820152600960248201527f4f6c642050726f6f66000000000000000000000000000000000000000000000060448201526064016100c6565b6040517ff5c9d69e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063f5c9d69e9061019c9088908890889088906004016103a3565b602060405180830381865afa1580156101b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101dd919061042e565b6102295760405162461bcd60e51b815260206004820152600d60248201527f496e76616c69642070726f6f660000000000000000000000000000000000000060448201526064016100c6565b506020015160005550600192915050565b6040805190810167ffffffffffffffff81118282101715610284577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b600082601f83011261029b57600080fd5b6102a361023a565b8060408401858111156102b557600080fd5b845b818110156102cf5780358452602093840193016102b7565b509095945050505050565b60008060008061014085870312156102f157600080fd5b6102fb868661028a565b9350604086605f87011261030e57600080fd5b61031661023a565b8060c088018981111561032857600080fd5b8389015b8181101561034d5761033e8b8261028a565b8452602090930192840161032c565b5081965061035b8a8261028a565b95505050505061036f86610100870161028a565b905092959194509250565b8060005b600281101561039d57815184526020938401939091019060010161037e565b50505050565b61014081016103b2828761037a565b6040808301866000805b60028082106103cb5750610405565b835185845b838110156103ee5782518252602092830192909101906001016103d0565b5050509385019350602092909201916001016103bc565b505050505061041760c083018561037a565b61042561010083018461037a565b95945050505050565b60006020828403121561044057600080fd5b8151801515811461045057600080fd5b939250505056fea26469706673582212206395795d36789e7a9b6888bfe90d51af8eaca0172948c5706e44adf31974fadf64736f6c63430008110033";

type ZkSocialRecoveryWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZkSocialRecoveryWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZkSocialRecoveryWallet__factory extends ContractFactory {
  constructor(...args: ZkSocialRecoveryWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _hashCheckVerifier: PromiseOrValue<string>,
    _ownerPasswordHash: PromiseOrValue<BigNumberish>,
    _trustees: PromiseOrValue<string>[],
    _passwordHashes: PromiseOrValue<BigNumberish>[],
    _thresholdForRecovery: PromiseOrValue<BigNumberish>,
    _root: PromiseOrValue<BigNumberish>,
    _otpVerifier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZkSocialRecoveryWallet> {
    return super.deploy(
      _hashCheckVerifier,
      _ownerPasswordHash,
      _trustees,
      _passwordHashes,
      _thresholdForRecovery,
      _root,
      _otpVerifier,
      overrides || {}
    ) as Promise<ZkSocialRecoveryWallet>;
  }
  override getDeployTransaction(
    _hashCheckVerifier: PromiseOrValue<string>,
    _ownerPasswordHash: PromiseOrValue<BigNumberish>,
    _trustees: PromiseOrValue<string>[],
    _passwordHashes: PromiseOrValue<BigNumberish>[],
    _thresholdForRecovery: PromiseOrValue<BigNumberish>,
    _root: PromiseOrValue<BigNumberish>,
    _otpVerifier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _hashCheckVerifier,
      _ownerPasswordHash,
      _trustees,
      _passwordHashes,
      _thresholdForRecovery,
      _root,
      _otpVerifier,
      overrides || {}
    );
  }
  override attach(address: string): ZkSocialRecoveryWallet {
    return super.attach(address) as ZkSocialRecoveryWallet;
  }
  override connect(signer: Signer): ZkSocialRecoveryWallet__factory {
    return super.connect(signer) as ZkSocialRecoveryWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZkSocialRecoveryWalletInterface {
    return new utils.Interface(_abi) as ZkSocialRecoveryWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZkSocialRecoveryWallet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ZkSocialRecoveryWallet;
  }
}