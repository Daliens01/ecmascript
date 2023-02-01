const user ={ userName : "herb", age: 23, country: "mexico"}
//digo mediante el spread que todo lo demas va a guardarse en values
const {userName, ...values} = user 
console.log(userName);
console.log(values);