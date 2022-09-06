const { hex_to_ss58 } = require("../utils/key-util");

test("Should return encode address", () => {
    expect(hex_to_ss58("d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d", 42)).toBe("5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY");
});