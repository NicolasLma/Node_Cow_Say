const identityStudent = require("./information");

console.log(identityStudent.name);
console.log(identityStudent.nameCampus);

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Je m'apelle ${identityStudent.name} et je viens de la ${identityStudent.nameCampus}`,
    e: "oO",
    T: "U ",
  })
);
