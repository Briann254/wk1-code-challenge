const calculatePayeTax = (grossSalary) => {
    const payeTax = grossSalary * 0.3;
    return payeTax;
}

const calculateNhif = (grossSalary) => {
    const nhif = grossSalary * 0.1;
    return nhif;
};

const calculateNssf = (grossSalary) => {
    const nssf = grossSalary * 0.05;
    return nssf;
};

const netSalaryCalculator = (grossSalary, benefits) => {
   //Calculate the PAYE tax from KRA and NHIF
    const payeTax = calculatePayeTax(grossSalary);
    const nhif = calculateNhif(grossSalary);
    const nssf = calculateNssf(grossSalary);
    const totalDeductions = payeTax + nhif + nssf;
    const netSalary = grossSalary - totalDeductions - benefits;
    return netSalary;
};