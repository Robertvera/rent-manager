describe("Rocketman API", () => {
    'use strict'

    let target = rocketApi
    // prueba estandar, para que no anulen la prueba
    // rocketApi = undefined

    // RETURN ROCKETS
    describe('retrieve rocket', () => {
        let rockets

        beforeEach(done => {
            target.searchRockets()
                // desde la api le enviamos la url para guardarla en rockets
                // y poder usar en el expect los rockets
                .then(_rockets => {
                    rockets = _rockets

                    done()
                })
                .catch(done)
        })

        it('should get rockets on retrieve', () => {
            expect(rockets).not.toBeUndefined()

            expect(rockets.length > 0).toBeTruthy()
        })
    })

    // RETURN CAPSULES
    describe('retrieve capsules', () => {
        let capsules

        beforeEach(done => {
            target.searchCapsules()
                .then(_capsules => {
                    capsules = _capsules

                    done()
                })
                .catch(done)
        })

        it('should get capsules on retrieve', () => {
            expect(capsules).not.toBeUndefined()

            expect(capsules.length > 0).toBeTruthy()
        })
    })

    // RETURN LAUNCHPADS
    describe('retrieve launchpads', () => {
        let launchpads

        beforeEach(done => {
            target.searchLaunchpads()
                .then(_launchpads => {
                    launchpads = _launchpads

                    done()
                })
                .catch(done)
        })

        it('should get launchaps on retrieve', () => {
            expect(launchpads).not.toBeUndefined()

            expect(launchpads.length > 0).toBeTruthy()
        })
    })

    // RETURN ROCKET BY ID
    describe('retrieve rockets by id', () => {
        let rocketById

        beforeEach(done => {
            target.searchRocketById('falcon9')
                .then(_rocketById => {
                    rocketById = _rocketById

                    done()
                })
                .catch(done)
        })

        it('should get rockets by id on retrieve', () => {
            expect(rocketById).not.toBeUndefined()
            
            expect(Object.keys(rocketById).length > 0).toBeTruthy()
        })
    })

    // RETURN CAPSULE BY ID
    describe('retrieve capsules by id', () => {
        let capsulesById

        beforeEach(done => {
            target.searchCapsuleById('dragon1')
                .then(_capsulesById => {
                    capsulesById = _capsulesById

                    done()
                })
                .catch(done)
        })

        it('should get capsules by id on retrieve', () => {
            expect(capsulesById).not.toBeUndefined()
            
            expect(Object.keys(capsulesById).length > 0).toBeTruthy()
        })
    })

    // RETURN LAUNCHPAD BY ID
    describe('retrieve launchpad by id', () => {
        let launchpadById

        beforeEach(done => {
            target.searchLaunchpadById('ccafs_slc_40')
                .then(_launchpadById => {
                    launchpadById = _launchpadById

                    done()
                })
                .catch(done)
        })

        it('should get launchpad by id on retrieve', () => {
            expect(launchpadById).not.toBeUndefined()
            
            expect(Object.keys(launchpadById).length > 0).toBeTruthy()
        })
    })


});
