require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind exchange gloom arch sun genuine'; 
let testAccounts = [
"0x2f98a613cf5679df61787e7dfb1f1c736bea52bd1b1be44513104991ffa6a5fe",
"0x57c2feafc16a1eb367083751e20ec24f35216566f3a1d7d96d46146924382cdb",
"0x980d3b3b659f0a318b9714d68b9a48e91ad6bbe39eb097c1537dc8b90aa3c3f0",
"0xf45151fe971b73e6e060af235311df64ee52e2e7b8f848c3f0f9dec740c0bfde",
"0x535eb551081c60f0bb971b3c20e84dc9781e84a1572c04a3fe7a13f6f2480289",
"0x1e410fe7b196be274f34f486a15cf7217dbb809d90a15cd8a4b7185d1a5a77a5",
"0x56fe5216d21b39141fe983d651a1d85532f90f2d950e78bacfc067e377dcf443",
"0x74ef41e37d534824979baa25ce6a43fe6e919134b2fe59258fda2f4097289d57",
"0x791933d8ed62aa26ccb5a2eb3019e66e8f3a77a6e30ff73e2f41b033309d6615",
"0x251a2034805f72851071a2ce492801af8bfd460a998e6adc7454700296cd703d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

