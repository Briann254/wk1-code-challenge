const studentgrade = (grade) => {

    if (grade < 0 || grade > 100){
        return "invalid grade"
    }

    if (grade > 79) {
        return "A";
    }else if (grade > 60) {
        return "B";
    }else if (grade >= 59){
        return "C";
    }else if (grade >= 40){
        return "D;"
    }else {
        return "E"
    }
}

console.log(studentgrade(30));
