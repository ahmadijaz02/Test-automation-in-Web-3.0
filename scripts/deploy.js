const { ethers } = require("hardhat");

async function main() {
  const signers = await ethers.getSigners();  
  console.log("Signers:", signers);  
  
  const deployer = signers[0];  
  if (!deployer) {
    console.error("No deployer found");
    return;
  }

  console.log("Deploying contracts with the account:", deployer.address);

  try {
    const balance = await ethers.provider.getBalance(deployer.address);  

    console.log("Balance in Wei:", balance.toString());  
} catch (error) {
  console.error("Error fetching balance:", error);
}
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
