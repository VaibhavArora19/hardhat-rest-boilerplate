const app = require("./setup.js").initApp();
app.get('/', (req, res)=>{res.json("Hello, welcome to my back end! Now git out.")});


const { loadContract } = require("./blockchain.js");
async function getOracleAddress(chainId) {
    const FissionEngine = loadContract(chainId, "FissionEngine");
    if (FissionEngine === false) return false; 
    const address = await FissionEngine.priceFeedAddress();
    return address;
}


app.post("/oracle", (req, res) => {getOracleAddress(80001).then(oracle => {res.json(oracle)})});