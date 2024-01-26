// MAIN
import { faker } from "@faker-js/faker";

// LIBS
import dayjs from "dayjs";

export default class Faker {
  static id(): string {
    return faker.datatype.uuid();
  }

  static string(amount: number = 1): string {
    return faker.lorem.word(amount);
  }

  static integer(min: number = 1, max: number = 1): number {
    return faker.datatype.number({ min, max });
  }

  static url(): string {
    return faker.internet.url();
  }

  static sentence(amount: number = 1): string {
    return faker.lorem.sentence(amount);
  }

  static boolean(value: boolean = true): boolean {
    if (value !== undefined) return value;
    return faker.datatype.boolean();
  }

  static date(): Date | string {
    const date = faker.date.recent();
    const formattedDate = dayjs(date).format("YYYY-MM-DDTHH:mm:ssZ");

    return formattedDate;
  }
}
