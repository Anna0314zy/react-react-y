let {Map,fromJS,is} = require('immutable');
let obj= Map({user:{name:'zhufeng'}});
console.log(obj.toJS());
console.log(obj.toJSON());
console.log(obj.toObject());
// let obj2 = obj1.set('age','10');
// let obj3 = obj2.set('home','beijing');

// console.log(obj1.get('user') === obj3.get('user'))
