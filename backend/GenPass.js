const bcrypt= require('bcrypt');

let pswd=bcrypt.hashSync('1234',9);

console.log(pswd)