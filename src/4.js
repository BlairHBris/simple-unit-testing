function myFunction(salary, taxCode, incomeTax1, incomeTax2, ownsCar) {
  const totalIncomeTax = incomeTax1 + incomeTax2;
  const studentLoan = (salary - 17775) * 0.09;
  const originalSalary = salary;
  let nationalInsurance = null;

  if (taxCode === "1150L") {
    nationalInsurance = salary * 0.1;
  } else if (taxCode === "ST") {
    nationalInsurance = salary * 0.05;
  } else {
    nationalInsurance = salary * 0.08;
  }

  const deductions = [nationalInsurance, totalIncomeTax, studentLoan];

  salary = salary - deductions[0] - deductions[1] - deductions[2];

  return (
    `Your gross income is £${originalSalary} and your net income is £${salary}.`
  );
}

// console.log(myFunction(100000, "1150L", 5000, 3000, true));

module.exports = {myFunction,}
