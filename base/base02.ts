
// 用字面量限定类型

let c: 10; // 与 const c = 10; 一个效果

// 多用于  let c : 10 | 'hello' | true  &&  let c : number | string | boolean 就是联合类型

// 可以用any代替联合类型

let d: any;

d = 1;
d = 'hello';
d = true;

// unknow 可以代替 any
// unknow 是安全类型的any , 不可以赋值给其他变量

// 类型断言 告诉解析器变量的实际类型

let e: unknown;

e = 1;

e = 'oj8k';

// 断言语法
d = e as string;
d = <string>e;


export { }