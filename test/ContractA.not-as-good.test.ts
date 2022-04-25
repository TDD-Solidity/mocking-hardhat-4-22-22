import { expect } from "chai";
import { ethers } from "hardhat";

import { ContractA, ContractB } from "../typechain";

describe('ContractA', () => {

    describe('getSomeNum', () => {

        let contractA: ContractA;

        beforeEach(async () => {
            
            const ContractB = await ethers.getContractFactory('ContractB');
            const contractB = await ContractB.deploy();
            await contractB.deployed();

            const ContractA = await ethers.getContractFactory('ContractA');
            contractA = await ContractA.deploy(contractB.address);
            await contractA.deployed();
        })

        describe('doCalculation', () => {

            xit('returns twice what getSomeNum returns', async () => {
                const result = await contractA.doCalculation();
                expect(result).to.equal(1600);
            })

        })

    })

})

