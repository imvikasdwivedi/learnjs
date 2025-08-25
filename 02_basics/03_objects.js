//singleton
//Object.create
//object literals

const JsUser={
    name : 'Vikas',
    'full Name': 'Vikas Dwivedi',
    age : 18,
    location : 'Noida',
    email :'vikas@openai.com',
    isLoggedIn: false,
    lastLoginDays : ['Monday','Wednesday']    
}
console.log(JsUser.email)
console.log(JsUser['email']);
//console.log(JsUser.full Name); this will not function because
//  when prop. key of object is in double quotes this won't work.
console.log(JsUser['full Name']);// always works 
console.log(JsUser.location);




