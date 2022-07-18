const { assert } = require('chai');

const AccessRestriction = artifacts.require("AccessRestriction");

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('AccessRestriction', (accounts) => {
    before(async () => {

    })

    describe('Donation test', async () => {
        it('Test with no donation', async() => {
            accessRestrictionInstance = await AccessRestriction.deployed()
            await accessRestrictionInstance.revealHighestDonor().should.be.rejected
            //assert.equal(highestDonor, address(0))
        })

        it('Test with donation', async() => {
            investor = accounts[1]
            accessRestrictionInstance = await AccessRestriction.deployed()
            await accessRestrictionInstance.sendDonation({from: investor, value: web3.utils.toWei('1', 'Ether')})
            const highestDonor = await accessRestrictionInstance.revealHighestDonor()
            assert.equal(highestDonor.toString(), investor)
        })
    })
})