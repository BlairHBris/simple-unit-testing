function greetPeople(people) {
  let greeting = "Hello ";

  people.forEach(person => {
    greeting = greeting + person;
  });

  return greeting;
}

module.exports = {greetPeople,}
