const NodeRSA = require("node-rsa");
const key = new NodeRSA();

const keyPair = key.generateKeyPair();

const publicDer = keyPair.exportKey("pkcs8-public-pem");
const privateDer = keyPair.exportKey("pkcs8-private-pem");

console.log(privateDer);
console.log("\n");
console.log(publicDer);

