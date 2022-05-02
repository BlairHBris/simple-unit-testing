var mentors = [
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

function getMentorInfo(mentors, name) {

    mentors.forEach(mentor => {
        if(mentor.yearsOfExperience <= 10) {
            mentor.jobTitle = "Junior Developer"
        } else if(mentor.yearsOfExperience > 10 && mentor.yearsOfExperience <= 20) {
            mentor.jobTitle = "Senior Developer"
        } else if(mentor.yearsOfExperience > 20) {
            mentor.jobTitle = "Very Senior Developer"
        }
        mentor.fullName = mentor.title + ' ' + mentor.name;
    })

    const requestedMentor = mentors.find(function (mentor) {
        return mentor.name === name
    })

    return requestedMentor;
}

getMentorInfo(mentors, 'Etza')

module.exports = {getMentorInfo,}