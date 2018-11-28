export type Secret = ReadonlyArray<number>;

export type Record = Readonly<{
  numbers: Secret;
  a: number;
  b: number;
}>;

export type BullsCowsData = Readonly<{
  secret: Secret;
  records: Record[];
}>;

export default class BullsCows {
  readonly secret: Secret;
  readonly records: Record[];

  constructor(data?: BullsCowsData) {
    if (!data) {
      data = { secret: this.generate(), records: [] };
    }

    this.secret = data.secret;
    this.records = data.records;
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

  guess(numbers: Secret) {
    const { secret } = this;

    let a = 0, b = 0;

    numbers.forEach((number, i) => {
      const index = secret.indexOf(number);

      if (index === i) a++; else if (index > -1) b++;
    });

    const record: Record = { numbers, a, b };

    this.addRecord(record);

    return record;
  }

  private addRecord(record: Record) {
    this.records.push(record);
  }
}
