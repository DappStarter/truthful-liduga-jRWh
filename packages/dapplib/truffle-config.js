require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remember minor good private success gather'; 
let testAccounts = [
"0xc96380c2fdec2aa2d19d710f6b2df80ee324f2417df3243957f3d57261cd013c",
"0x98d5cdd9f14e109cc2daad5c7c4647b3cfdfdc3de2d7613f897b4b435c79ada7",
"0x4750b4c68a37642bc550e0674e192bf0eb18b7fe3e2d611401d808926e74bb4d",
"0xf72974709581dd742bccbecb0b7f2b7aee54089e025863e3915917834617928d",
"0x241242976934d08210e4938571c45bd7f17456fcc4b3f4848cbb3fabe02b00d5",
"0x7394a7b806eeafc34b9e8d1596922defb788e81ba20ef0404ccbbe821947632f",
"0xf79783ba4939528b0ce075092abd481a9a311deafe4f363bad51011f58eef9ba",
"0xb2a0165c1536d162e6870c5cfabbf0e961ecd36600770d462c5ade9d8d73e596",
"0x7ab6896734c7c126fbd90901906a433c14325a57e49efc42f63e7135d8fbc46a",
"0x3edd2ad6fcb66f40bd4630825c36335ef6280688560c13fb9ae7498cfad692ba"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


