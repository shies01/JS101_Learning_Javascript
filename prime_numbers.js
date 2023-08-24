const startRange = 1;
const endRange = 50;

for (let number = startRange; number <= endRange; number++) {
  if (number <= 1) {
    continue;
  }

  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(number);
  }
}
