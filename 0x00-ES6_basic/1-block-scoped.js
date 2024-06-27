export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // assigning a new value
    task = true;
    // assigning a new valie
    task2 = false;
  }

  return [task, task2];
}
