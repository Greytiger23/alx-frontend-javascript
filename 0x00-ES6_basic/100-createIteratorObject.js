export default function createIteratorObject(report) {
  const departments = Object.keys(report);
  const index = 0;
  const currentDepartment = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (index < departments.length) {
        if (index === 0 || report[departments[currentDepartment]].length === 0) {
          currentDepartment++;
          index++;
        }
        if (currentDepartment < departments.length) {
          return {
            value: report[departments[currentDepartment - 1]][report[departments[currentDepartment - 1]].length - 1],
            done: false,
          };
        }
        return { done: true };
      }
      return { done: true };
    },
  };
}
