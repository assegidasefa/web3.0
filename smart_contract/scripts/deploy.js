const  main = async () =>  {
  const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to: ",transactions.address);
}

const runMain = async () =>{
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain();