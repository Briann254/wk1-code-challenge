const gradeStudent = (grade) => {
    // Check if grade is valid (between 0 and 100)
    if (grade < 0 || grade > 100) {
        return "Invalid grade";
    }
    
    // Check if grade is 79 or above
    // 79 and 100
    if (grade > 79) {
        return 'A';
    } else if (grade >= 60) {
        return 'B';
    } else if (grade >= 59) {
        return 'C';
    } else if (grade >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

console.log(gradeStudent(80));
