const findTheOldest = function(people) {
    //Set the year to the year of the computer running code.
    let date = new Date();
    date.setTime(Date.now());
    const currentYear = date.getFullYear();

    //Figure out who is still alive, set death date to this year for easy math
    const stillAlive = people.filter(isAlive);     

    return;
};

function hasDied(person){
    let key = "yearOfDeath";
    return (key in person);
}

function isAlive(person){
    let key = "yearOfDeath";
    if((key in person) == false){
        return true;
    };
}

// Do not edit below this line
module.exports = findTheOldest;
