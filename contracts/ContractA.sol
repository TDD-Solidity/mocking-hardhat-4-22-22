//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./ContractB.sol";

import "hardhat/console.sol";

contract ContractA {

    ContractB private contractB;

    constructor(ContractB _contractB) {
        contractB = _contractB;
    }

    function doCalculation() public view returns (uint) {
        return contractB.getSomeNum() * 2;
    }

}