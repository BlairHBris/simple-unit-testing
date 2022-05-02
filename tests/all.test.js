const { checkFive } = require("../src/1")

describe('checkFive function tests', () => {
    it('confirms a given number is equal to 5', () => {
        const result = checkFive(5)
        expect(result).toBe('5 is equal to 5.')
    })
    it('confirms a given number is less than 5', () => {
        const result = checkFive(4)
        expect(result).toBe('4 is less than 5.')
    })
    it('confirms a given number is greater than 5', () => {
        const result = checkFive(6)
        expect(result).toBe('6 is greater than 5.')
    })
})

