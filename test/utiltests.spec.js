const expect = require('expect')
const util = require('../util')

describe('Util Test Cases', () => {



    it('Can load wishlists', () => {
        //console.log(config.currentEnvironment);
        var lists = util.getLists('brian')

        expect(lists).toBeDefined()
        expect(lists.length).toBe(1)
        for (var key in lists) {
            expect(lists[key].friendlyName).toBeDefined()
            expect(lists[key].friendlyName).toBe('Erin')
            expect(lists[key].wishes).toBeDefined()
            expect(lists[key].wishes.length).toBeGreaterThan(1)
            expect(lists[key].wishes.length).toBe(3)
        }
    })

    it('Can load own Wishlist', () => {
        var ownList = util.getOwnList('brian')
        // for (var item in ownList) {
        //     expect(item).toBeDefined()
        //     //expect(item).toBeA('string')
        //     console.log(item)
        // }
        for (var i = 0; i < ownList.length; i++) {
            expect(ownList[i]).toBeDefined()

        }
    })

    it('Can authenticate', () => {
        var returnValue = util.authenticate('brian', 'Password1')
        expect(returnValue).toBe('Brian')
        returnValue = util.authenticate('brian', 'Password9')
        expect(returnValue).toBe('FAIL')
        returnValue = util.authenticate('frank', 'Password1')
        expect(returnValue).toBe('FAIL')
    })

    it('Can generate differnet ids', () => {
        var id1 = util.generateId('brian')
        var id2 = util.generateId('brian')
        expect(id1).not.toBe(id2);
    })
})