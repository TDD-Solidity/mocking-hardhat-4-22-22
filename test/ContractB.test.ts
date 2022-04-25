import { expect } from "chai";
import { ethers } from "hardhat";

import { ContractB } from "../typechain";

describe('ContractB', () => {

    describe('getSomeNum', () => {

        let contractB: ContractB;

        beforeEach(async () => {
            const ContractB = await ethers.getContractFactory('ContractB');
            contractB = await ContractB.deploy();
            await contractB.deployed();
        })

        it('returns 500', async () => {
            const result = await contractB.getSomeNum();
            expect(result).to.equal(500);
        })

    })

})
