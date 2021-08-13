// object是对象

let a: object;

a = {};
a = function () { };

// 声明对象语法 ?表示可选

let b: { name: string, age?: number };
b = { name: 'zhuzhu' };
b = { name: "blm", age: 12 };


// 表示可以有任意属性
let c: { name: string, [propName: string]: any }
c = { name: 'swk' }


// 设置函数结构的声明

let d: (a: number, b: number) => number;

d = function (x, y) { return x + y }

// 声明数组

let e: string[];
e = ['1', '2'];

let f: Array<number>;
f = [1, 2, 3];

// 声明固定数组 ：元组
let g: [number, string]
g = [1, 'hel'];

// enum:枚举

enum Gender {
    Male,
    Female
}

let i: { name: string, gender: Gender };

i = { name: 't3z', gender: Gender.Male };

if (i.gender === Gender.Male) {
    console.log('男');

}


// 自定义类型
type myType = 1 | 2 | 3;

let j: myType;

j = 3;




export { }