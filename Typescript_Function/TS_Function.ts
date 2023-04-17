const logNumber:(i:number)=>void=(i:number)=>console.log(i);
const addNumber=(firstNumber:number,lastNumber:number):number=>firstNumber+lastNumber
console.log(addNumber(10,20));
const FullName=(sunName:string,givenName:string):string=>sunName+''+givenName;
console.log(FullName('Abu Al Shahriar','Rifat'));
function divide(a:number,b:number){
    return a/b;
}

console.log(divide(100,2));

function multiply(a:number,b:number){
    return a*b;
}

console.log(multiply(100,10));

function loggaer(message:string):void{
  console.log(message);
}

console.log(loggaer('Hi Rifat'));

function throwErr(message:string):string{
    if(!message){
        throw new Error(message);
    }
    return message
}

console.log(throwErr("Hi Bangladesh"));

let forecast={
    date:new Date(),
    weather:'sunny'
}

const logWeather=(
 forecast:{
    date:Date,
    weather:string
 }
):void=>{
    console.log(forecast.date);
    console.log(forecast.weather)
}

logWeather(forecast);
//ES2015
const logg=({date,weather})=>{
    console.log(date,weather)
}

const logg1=({date,weather}:{date:Date,weather:string}):void=>{
  console.log(date);
  console.log(weather)
}

const FullNamee=({firstName,lastName}:{firstName:string,lastName:string}):string=>{
  return firstName+''+lastName

}
console.log(FullName('r','i'))

