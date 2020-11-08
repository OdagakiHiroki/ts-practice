import { v4 as uuidv4 } from 'uuid';
import { User } from './User';

const user = new User('竈門', '炭治郎', 15);

window.onload = () => init();

const init = () => {
  const contentsElem = document.getElementById('contents');
  if (!!contentsElem) {
    const familyName = `${user.getFamilyName}`;
    contentsElem.innerText = `${familyName} ${user.givenName}`;
  }

  const saibanButton = document.getElementById('saiban') as HTMLButtonElement;
  const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;
  saibanButton.onclick = (e) => {
    uuidSpan.innerText = uuidv4();
  }
  const tenYearsAfterAgeBtn = document.getElementById('tenYearsAfterAgeBtn') as HTMLButtonElement;
  const tenYearsAfterAgeSpan = document.getElementById('tenYearsAfterAge') as HTMLSpanElement;
  tenYearsAfterAgeBtn.onclick = (e) => {
    const tenYearsAfterAge = user.getAgeAfterTenYears(user.age);
    tenYearsAfterAgeSpan.innerText = String(tenYearsAfterAge);
  }
  const skillBtn = document.getElementById('skillBtn') as HTMLButtonElement;
  const skillSpan = document.getElementById('skill') as HTMLSpanElement;
  skillBtn.onclick = (e) => {
    const skill = user.getSkill();
    skillSpan.innerText = String(Object.keys(skill.water));
  }
}
