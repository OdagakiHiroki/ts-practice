class User {
  public age: number;
  public familyName: string;
  public givenName: string;

  constructor (familyName: string, givenName: string, age: number) {
    this.age = age;
    this.familyName = familyName;
    this.givenName = givenName;
  }
}

const user = new User('竈門', '炭治郎', 15);

window.onload = () => init();

const init = () => {
  const contentsElem = document.getElementById('contents');
  if (!!contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
  }
}
