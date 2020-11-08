class User {
  public age: number;
  public familyName: string;
  public givenName: string;
  private skill: { water: {}, hi: {} };

  constructor (familyName: string, givenName: string, age: number) {
    this.age = age;
    this.familyName = familyName;
    this.givenName = givenName;
    this.skill = {
      water: {
        utisio: {
          power: 10,
        },
      },
      hi: {
        hinokamikagura: {
          power: 100,
        }
      },
    };
  }

  public getAgeAfterTenYears(age?:number): number {
    if (age) {
      return age + 10;
    }
    return this.age + 5;
  }

  public getSkill() {
    return this.skill;
  }
}

export {
  User
}