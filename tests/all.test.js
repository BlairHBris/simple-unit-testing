const { checkFive } = require("../src/1")
const { removeVowelsForWords } = require("../src/10")
const { greaterThan10 } = require("../src/11")
const { sliceAndSort } = require("../src/12")
const { getLargestNumber } = require("../src/13")
const { getEven } = require("../src/14")
const { whoWon } = require("../src/2")
const { getMentorInfo } = require("../src/3")
const { myFunction } = require("../src/4")
const { compareNumbers } = require("../src/5")
const { getCircleAreas } = require("../src/6")
const { getCircleArea } = require("../src/7")
const { greetPeople } = require("../src/8")
const { removeVowels } = require("../src/9")

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

describe('myFunction function tests', () => {
    it('calculates gross and net income in the highest tax code', () => {
        const result = myFunction(100000, '1150L', 5000, 3000, true)
        expect(result).toBe(`Your gross income is £${100000} and your net income is £${74599.75}.`)
    })
    it('calculates gross and net income in the lowest tax code', () => {
        const result = myFunction(100000, 'ST', 5000, 3000, true)
        expect(result).toBe(`Your gross income is £${100000} and your net income is £${79599.75}.`)
    })
    it('calculates gross and net income in the other tax codes', () => {
        const result = myFunction(100000, 'A', 5000, 3000, true)
        expect(result).toBe(`Your gross income is £${100000} and your net income is £${76599.75}.`)
    })
})

describe('compareNumbers function tests', () => {
    it('takes two numbers and declares the first is the smaller one', () => {
        const result = compareNumbers(3,4)
        expect(result).toBe(`${3} is smaller than ${4}`)
    })
    it('takes two numbers and declares the first is the bigger or equal to the other one', () => {
        const result = compareNumbers(4,3)
        expect(result).toBe(`${4} is bigger than or equal to ${3}`)
    })
})

describe('getCircleAreas function tests', () => {
    it('Adds items to an array when given a radius', () => {
        const array = [3,5]
        const newArray = getCircleAreas(array)
        expect(newArray).toEqual([28.27, 78.54])
    })
})

describe('getCircleArea function tests', () => {
    it('calculates the area of a circle given a radius', () => {
        const result = getCircleArea(3)
        expect(result).toEqual(28.27)
    })
})

describe('greatPeople function tests', () => {
    it('prints the designated message when given an array of people', () => {
        const people = [
            'Blair',
            'Ry',
            'Jaclyn'
        ]
        const result = greetPeople(people)
        expect(result).toEqual('Hello BlairRyJaclyn')
    })
})

describe('removeVowels function tests', () => {
    it('can remove and replace lower case consenants', () => {
        const result = removeVowels('ravens')
        expect(result).toBe('_a_e__')
    })
    it('can remove and replace upper case consenants', () => {
        const result = removeVowels('RaVeNS')
        expect(result).toBe('_a_e__')
    })
})

describe('removeVowelsforWords function tests', () => {
    it('can remove and replace lower case consenants', () => {
        const words = ['apple', 'grapes']
        const result = removeVowelsForWords(words)
        expect(result).toEqual(['a___e', '__a_e_'])
    })
    it('can remove and replace upper case consenants', () => {
        const words = ['APPLe', 'GRaPeS']
        const result = removeVowelsForWords(words)
        expect(result).toEqual(["____e", "__a_e_"])
    })
})

describe('greaterThan10 function tests', () => {
    it('determines which numbers in an array are less than 10', () => {
        const array = [-1,9,10,11]
        const result = greaterThan10(array)
        expect(result).toEqual([11])
    })
})

describe('sliceAndSort function tests', () => {
    it('takes an array of numbers and returns an array with the 2nd and 3rd smallest values', () => {
        const array = [3,6,2,7,1]
        const result = sliceAndSort(array)
        expect(result).toEqual([2,3])
    })
})

describe('getLargestNumber function tests', () => {
    it('determines which numbers in an array is the largest', () => {
        const array = [-1,9,10,11]
        const result = getLargestNumber(array)
        expect(result).toEqual(11)
    })
})

describe('getEven function tests', () => {
    it('determines which positive numbers in a given array are even and returns them', () => {
        const array = [1,2,3,4,5,6]
        const result = getEven(array)
        expect(result).toEqual([2,4,6])
    })
    it('determines which negative numbers in a given array are even and returns them', () => {
        const array = [-1,-2,-3,-4,-5,-6]
        const result = getEven(array)
        expect(result).toEqual([-2,-4,-6])
    })
})