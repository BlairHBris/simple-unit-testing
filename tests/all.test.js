const { checkFive } = require("../src/1")
const { whoWon } = require("../src/2")
const { getMentorInfo } = require("../src/3")

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

describe('getMentorInfo function tests', () => {
    const mentors = [
        {
            name: 'Irina',
            title: 'Dr.',
            yearsOfExperience: 10
        }, {
            name: 'Ashleigh',
            title: 'Dame',
            yearsOfExperience: 20
        }, {
            name: 'Etza',
            title: 'Professor',
            yearsOfExperience: 30
        }
    ];
    it('given the mentors array, adds the object mentorTitle based on the yearsOfExperience, Junior Developer', () => {
        const result = getMentorInfo(mentors, 'Irina')
        expect(result).toEqual({
            "fullName": "Dr. Irina", 
            "jobTitle": "Junior Developer", 
            "name": "Irina", 
            "title": "Dr.", 
            "yearsOfExperience": 10})
    })
    it('given the mentors array, adds the object mentorTitle based on the yearsOfExperience, Senior Developer', () => {
        const result = getMentorInfo(mentors, 'Ashleigh')
        expect(result).toEqual({
            "fullName": "Dame Ashleigh", 
            "jobTitle": "Senior Developer", 
            "name": "Ashleigh", 
            "title": "Dame", 
            "yearsOfExperience": 20})
    })
    it('given the mentors array, adds the object mentorTitle based on the yearsOfExperience, Very Senior Developer', () => {
        const result = getMentorInfo(mentors, 'Etza')
        expect(result).toEqual({
            "fullName": "Professor Etza", 
            "jobTitle": "Very Senior Developer", 
            "name": "Etza", 
            "title": "Professor", 
            "yearsOfExperience": 30})
    })
})