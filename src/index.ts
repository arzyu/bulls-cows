export default class BullsCows {
  private secret: number[];

  constructor() {
    this.secret = this.generate();
  }

  generate(length = 4) {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const secret: number[] = [];

    while (length-- > 0) {
      const i = Math.floor(Math.random() * numbers.length);

      secret.push(...numbers.splice(i, 1));
    }

    return secret;
  }

  check(numbers: number[]) {
    const { secret } = this;

    let a = 0, b = 0;

    numbers.forEach((number, i) => {
      const index = secret.indexOf(number);

      if (index === i) a++; else if (index > -1) b++;
    });

    return { a, b };
  }
}
