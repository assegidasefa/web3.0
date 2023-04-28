//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCounter;
    event Transfer(address from,address receiver,uint amount ,string message,uint256 timestamp,string keyword);
    struct TransferStruct{
        address from;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockChain() public{

    }

      function getAllTransaction() public view returns(TransferStruct[] memory){
       // return Transaction
    }

    //   function getTransactionCount() public view re{

    // }
}