const AccessRestriction = artifacts.require("AccessRestriction");

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(AccessRestriction);
}