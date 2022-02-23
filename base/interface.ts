
interface testValue {
  name: string
  // goTest() : number
}

function printValue(testObj: testValue) {
  console.log(testObj.name);
}

let myObj = { name: 'oh!', age: 3}

printValue(myObj)

// readOnly 作为属性用readOnly定义 作为变量用const定义







export { }