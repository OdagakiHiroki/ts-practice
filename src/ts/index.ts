import { User } from './User';

const user = new User('竈門', '炭治郎', 15);

window.onload = () => init();

const init = () => {
  const contentsElem = document.getElementById('contents');
  if (!!contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
  }
}
