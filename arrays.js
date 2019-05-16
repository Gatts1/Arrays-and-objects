//================================================
//FOR EACH
console.log("--------EACH METHOD-------------");

const arrayVar = [1, 2, 3, 4, "first", "second", "third"];

for(let i=0; i < arrayVar.length; i++){
  let newArray = [];
  newArray[i] = arrayVar[i]+ " hola";
  // console.log(arrayVar[i]);
  console.log(newArray[i]);
}
console.log(arrayVar);

//ARRAY.PROTOPYPE.JONA FUNCTION(){}
//===================================================
//PUSH
console.log("--------PUSH METHOD-------------");

const pushVar = [1, 2, 3, 4];

function pushMethod(value) {
  const lengthVar = pushVar.length;
  pushVar[lengthVar] = value;
}
pushMethod(10);
console.log(pushVar)

//==================================================
//POP
console.log("--------POP METHOD-------------");

let popVar = ["monday", "tuesday", "wenesday"];

function popMethod(){
  const lastValue = popVar[popVar.length - 1];
  const pop2 = Array(popVar.length - 1);
    for(let i=0; i< popVar.length - 1; i++) {
       pop2[i] = popVar[i];
    }
  popVar = pop2;

  console.log(lastValue);
}

console.log(popVar);
let popOut = popMethod();
console.log(popVar);

//==================================================
//MAP
console.log("--------MAP METHOD-------------");

const mapVar = [10, 20, 30, 40];

function mapMethod() {
  let newMap = [];
  for(let i = 0; i < mapVar.length ; i++) {
    newMap[i] = mapVar[i] * 2;
  }
  console.log(newMap);
}
 

console.log(mapVar);
mapMethod();

//==================================================
//MAP

