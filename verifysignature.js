const { signTransaction, recoverPublicKey } = require("ethereum-cryptography/secp256k1");

function verifySignature(publicKey, message, signature) {
  return recoverPublicKey(signature, message).toString("hex") === publicKey.toLowerCase();
}

// Example usage:
const publicKey = "0x1234567890abcdef1234567890abcdef12345678";
const message = "This is my message to sign";
const signature = signMessage(privateKey, message);
const isValid = verifySignature(publicKey, message, signature);
console.log(isValid);
// Output: true
