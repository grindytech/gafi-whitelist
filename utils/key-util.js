const { encodeAddress } = require('@polkadot/keyring');

function hex_to_ss58(address, ss58Format) {
    let enAdd = encodeAddress("0x" + address, ss58Format);
    return enAdd;
}

module.exports = {
    hex_to_ss58
};
