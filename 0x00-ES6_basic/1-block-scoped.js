export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // assigning a new value
    const task = true;
    // assigning a new valie
    const task2 = false;
  }

  return [task, task2];
}
