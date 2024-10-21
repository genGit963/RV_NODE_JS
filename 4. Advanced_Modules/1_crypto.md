Here's a comprehensive guide on encryption, decryption, and hashing using Node.js's `crypto` module. I'll include a Table of Contents to help you navigate through the various sections.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [1. Introduction to Node.js Crypto Module](#1-introduction-to-nodejs-crypto-module)
- [2. Basic Concepts in Cryptography](#2-basic-concepts-in-cryptography)
- [3. Setting Up the Crypto Module](#3-setting-up-the-crypto-module)
- [4. Encryption and Decryption](#4-encryption-and-decryption)
- [4.1 Symmetric Encryption](#41-symmetric-encryption)
  - [Example: AES Encryption and Decryption](#example-aes-encryption-and-decryption)
- [4.2 Asymmetric Encryption](#42-asymmetric-encryption)
  - [Example: RSA Key Generation and Encryption](#example-rsa-key-generation-and-encryption)
- [4.3 Digital Signatures](#43-digital-signatures)
  - [Example: Creating and Verifying Digital Signatures](#example-creating-and-verifying-digital-signatures)
- [5. Hashing Techniques](#5-hashing-techniques)
- [5.1 Hash Functions](#51-hash-functions)
  - [Example: Creating a SHA-256 Hash](#example-creating-a-sha-256-hash)
- [5.2 HMAC (Hash-based Message Authentication Code)](#52-hmac-hash-based-message-authentication-code)
  - [Example: HMAC using SHA-256](#example-hmac-using-sha-256)
- [6. Advanced Cryptographic Functions](#6-advanced-cryptographic-functions)
- [6.1 Key Derivation](#61-key-derivation)
  - [Example: Using PBKDF2](#example-using-pbkdf2)
- [6.2 Key Pair Generation](#62-key-pair-generation)
- [6.3 Salting](#63-salting)
- [7. Best Practices in Cryptography](#7-best-practices-in-cryptography)
- [8. Conclusion](#8-conclusion)

## 1. Introduction to Node.js Crypto Module

The Node.js `crypto` module provides cryptographic functionality that includes encryption, decryption, and hashing. It supports both symmetric and asymmetric encryption, key generation, digital signatures, and more. It is part of Node.js core, so you don't need to install any additional packages to use it.

## 2. Basic Concepts in Cryptography

Let's define some fundamental concepts:

- **Encryption:** The process of converting plaintext into ciphertext to prevent unauthorized access.
- **Decryption:** The reverse process of converting ciphertext back into plaintext.
- **Hashing:** Transforming data into a fixed-size value or hash, which is generally irreversible. Hashing is used for data integrity checks and password storage.
- **Symmetric Encryption:** Uses the same key for both encryption and decryption.
- **Asymmetric Encryption:** Uses a pair of keys (public and private) for encryption and decryption.
- **Digital Signatures:** Used to verify the authenticity and integrity of data.

## 3. Setting Up the Crypto Module

To use the `crypto` module in your Node.js application, you can include it as follows:

```javascript
const crypto = require("crypto");
```

## 4. Encryption and Decryption

## 4.1 Symmetric Encryption

Symmetric encryption involves using a single key to both encrypt and decrypt data. The most commonly used algorithm for symmetric encryption is **AES (Advanced Encryption Standard)**.

### Example: AES Encryption and Decryption

```javascript
const crypto = require("crypto");

// Key and IV (Initialization Vector) setup
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Encrypting the data
function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

// Decrypting the data
function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

const message = "Hello, World!";
const encryptedMessage = encrypt(message);
console.log("Encrypted:", encryptedMessage);
console.log("Decrypted:", decrypt(encryptedMessage));
```

## 4.2 Asymmetric Encryption

Asymmetric encryption involves using a pair of keys: a public key for encryption and a private key for decryption. The most commonly used algorithm is **RSA (Rivest-Shamir-Adleman)**.

### Example: RSA Key Generation and Encryption

```javascript
const {
  generateKeyPairSync,
  publicEncrypt,
  privateDecrypt,
} = require("crypto");

// Generate RSA key pair
const { publicKey, privateKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" },
});

const data = "Sensitive Information";

// Encrypting with public key
const encryptedData = publicEncrypt(publicKey, Buffer.from(data));
console.log("Encrypted Data:", encryptedData.toString("base64"));

// Decrypting with private key
const decryptedData = privateDecrypt(privateKey, encryptedData);
console.log("Decrypted Data:", decryptedData.toString());
```

## 4.3 Digital Signatures

Digital signatures provide a way to verify the authenticity and integrity of data using cryptographic techniques. They involve signing data with a private key and verifying it with a public key.

### Example: Creating and Verifying Digital Signatures

```javascript
const sign = crypto.createSign("SHA256");
sign.update("message to sign");
sign.end();

const signature = sign.sign(privateKey, "hex");

const verify = crypto.createVerify("SHA256");
verify.update("message to sign");
verify.end();

console.log(verify.verify(publicKey, signature, "hex")); // true or false
```

## 5. Hashing Techniques

## 5.1 Hash Functions

Hash functions like **SHA-256** generate a fixed-length hash from input data. Hashing is a one-way operation, meaning you cannot revert the hash to the original data.

### Example: Creating a SHA-256 Hash

```javascript
const hash = crypto.createHash("sha256");
hash.update("data to hash");
console.log(hash.digest("hex"));
```

## 5.2 HMAC (Hash-based Message Authentication Code)

HMACs use a secret key combined with a hash function to provide data integrity and authentication.

### Example: HMAC using SHA-256

```javascript
const hmac = crypto.createHmac("sha256", "a secret key");
hmac.update("data to protect");
console.log(hmac.digest("hex"));
```

## 6. Advanced Cryptographic Functions

## 6.1 Key Derivation

Key derivation functions like **PBKDF2** are used to create a secure encryption key from a password.

### Example: Using PBKDF2

```javascript
crypto.pbkdf2("password", "salt", 100000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString("hex"));
});
```

## 6.2 Key Pair Generation

Key pair generation is used in asymmetric encryption to create public and private keys. For example, RSA and ECC (Elliptic Curve Cryptography) keys.

## 6.3 Salting

**Salting** is a technique where a random value is added to data before hashing to ensure that the resulting hash is unique.

## 7. Best Practices in Cryptography

- Use up-to-date algorithms and avoid deprecated methods.
- Always use a random Initialization Vector (IV) in symmetric encryption.
- Never hardcode encryption keys in your source code.
- Use key derivation functions like PBKDF2 or bcrypt for password-based encryption.
- Regularly update your cryptographic libraries and dependencies.

## 8. Conclusion

- **Understand the Basics:** Start with the foundational concepts of encryption, decryption, and hashing.
- **Symmetric vs. Asymmetric Encryption:** Symmetric is faster and suitable for bulk data, while asymmetric provides secure key exchange.
- **Use Proper Hashing Techniques:** Hashing is ideal for data integrity and password storage but is irreversible.
- **Digital Signatures:** Essential for authenticating data and ensuring integrity.
- **Advanced Functions:** Utilize key derivation and salting to enhance security.

This guide covers the essentials and advanced aspects of the Node.js `crypto` module. For further details, refer to the [official Node.js documentation](https://nodejs.org/docs/latest/api/crypto.html) for specific use cases and API references.
