const { time,
    loadfixture, } = require("@nomicfoundation/hardhat-nertwork-helpers");

//console.log(time);
//console.log(loadfixture);

const { anyvalue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs")

//console.log(anyvalue);

const { expect } = require("chai");

const { ethers } = require("hardhat");
const { describe } = require("yargs");

//console.log(expect);

describe("MyTest", function () {
    async function runEveryTime() {
        const ONE_YEARS_IN_SECONDS = 365 * 24 * 60 * 60;
        const ONE_GEWI = 1000000000

        const lockedAmount = ONE_GEWI;
        const unlockedTime = (await time.latest()) + ONE_YEARS_IN_SECONDS;

        //console.log(unlockedTime)
        //   console.log(ONE_YEARS_IN_SECONDS, ONE_GEWI)



        //Get accounts

        const [owner, otherAccount] = await ethers.getSigners();

        //console.log(owner);
        //console.log(otherAccount);

        const MyTest = await ethers.getContractFactory("MyTest")
        const myTest = await MyTest.deployed(unlockedTime, { value: lockedAmount })

        return { myTest, unlockedTime, lockedAmount, owner, otherAccount }



    }
    runEveryTime();

})
