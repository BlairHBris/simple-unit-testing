const { expect } = require("expect")
const { checkFive } = require("../src/1")
const { whoWon } = require("../src/2")

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

describe('whoWon function tests', () => {
    it('returns tie if the players are equal', () => {
        const result = whoWon('rock','rock')
        expect(result).toBe('TIE!')
    })
    it('returns the winner in a rock vs scissors scenario', () => {
        const result = whoWon('scissors','rock')
        expect(result).toBe('Player 2 wins!')
    })
    it('returns the winner in a rock vs paper scenario', () => {
        const result = whoWon('rock','paper')
        expect(result).toBe('Player 2 wins!')
    })
    it('returns the winner in a scissors vs paper scenario', () => {
        const result = whoWon('scissors','paper')
        expect(result).toBe('Player 1 wins!')
    })
})