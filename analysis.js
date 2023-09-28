import { TendencyMath } from "./math.js";

function findUserById(userId) {
    return SALARIES.find(person => person.id === userId);
}

function findUserByName(userName) {
    return SALARIES.find(person => person.name == userName);
}

function AverageSalaryPerUser(userId) {
    const LIST_WORKS = findUserById(userId).works;
    const LIST_SALARIES = LIST_WORKS.map((amount) => {
        return amount.salary;
    });
    const AVERAGE_SALARY = TendencyMath.calculateMedian(LIST_SALARIES);
    return AVERAGE_SALARY;
}

console.log(findUserById(3));
console.log(findUserByName("Alex"));
console.log(AverageSalaryPerUser(1));