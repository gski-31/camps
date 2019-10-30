/* Challenge: use function to calc grades */

let calcGrade = (correct, possible) => {
    let score = ((correct / possible) * 100).toFixed(2);
    let grade = 'A'
    if (score > 90) {
        grade = 'A'
    } else if (score < 89 && score > 80) {
        grade = 'B'
    } else if (score < 79 && score > 70) {
        grade = 'C'
    } else if (score < 69 && score > 60) {
        grade = 'C'
    } else {
        grade = 'F'
    }
    return `your grade was an ${grade} from a score of ${score}`
}

console.log(calcGrade(10, 12))
console.log(calcGrade(109, 112))