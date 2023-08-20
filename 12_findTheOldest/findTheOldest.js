const findTheOldest = function(people) {
    return oldest = people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldestAge < currentAge ? current : oldest;
    });
};

const getAge = function(birth, death) {
    if (!death) {
        return new Date().getFullYear() - birth;
    }
    else {
        return death - birth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
