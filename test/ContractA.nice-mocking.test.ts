import { expect } from "chai";
import { ethers } from "hardhat";
import "@nomiclabs/hardhat-waffle";
import { ContractA } from "../typechain";
import { deployMockContract } from "ethereum-waffle";

import ContractBJson from '../artifacts/contracts/ContractB.sol/ContractB.json';

describe('ContractA', () => {

    describe('getSomeNum', () => {

        let contractA: ContractA;

        const mockCalculationResult = 1;

        beforeEach(async () => {
            
            const [owner] = await ethers.getSigners();
            const ContractB = await deployMockContract(owner, ContractBJson.abi);
            const contractB = await ContractB.deployed();

            await ContractB.mock.getSomeNum.returns(mockCalculationResult);

            const ContractA = await ethers.getContractFactory('ContractA');
            contractA = await ContractA.deploy(contractB.address);
            await contractA.deployed();
        })

        describe('doCalculation', () => {

            it('returns twice what getSomeNum returns', async () => {
                const result = await contractA.doCalculation();
                expect(result).to.equal(2 * mockCalculationResult);
            })

        })

    })

})

