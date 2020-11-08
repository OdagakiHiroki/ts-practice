"use strict";
var User = /** @class */ (function () {
    function User(familyName, givenName, age) {
        this.age = age;
        this.familyName = familyName;
        this.givenName = givenName;
    }
    return User;
}());
var user = new User('竈門', '炭治郎', 15);
window.onload = function () { return init(); };
var init = function () {
    var contentsElem = document.getElementById('contents');
    if (!!contentsElem) {
        contentsElem.innerText = user.familyName + " " + user.givenName;
    }
};
