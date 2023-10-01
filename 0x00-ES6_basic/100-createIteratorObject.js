export default function createIteratorObject(report) {
  function* iterateEmployees() {
    for (const department in report.allEmployees) {
      if (department in report.allEmployees) {
        const employeesInDepartment = report.allEmployees[department];
        for (const employee of employeesInDepartment) {
          yield employee;
        }
      }
    }
  }

  return {
    [Symbol.iterator]: iterateEmployees,
  };
}
