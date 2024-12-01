const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token Functions", function () {
  let SimpleToken, token, owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    SimpleToken = await ethers.getContractFactory("SimpleToken");
    token = await SimpleToken.deploy(owner.address); // Pass owner address
  });

  it("Should transfer tokens correctly", async function () {
    await token.mint(addr1.address, 1000);
    await token.connect(addr1).transfer(addr2.address, 500);
    expect(await token.balanceOf(addr1.address)).to.equal(500);
    expect(await token.balanceOf(addr2.address)).to.equal(500);
  });
});
