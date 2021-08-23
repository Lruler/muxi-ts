// 关于属性的封装

/**
1 .TS可以在类中的属性前添加属性的修饰符

public 修饰的属性可以在任意位置访问（修改）默认值
private 私有属性, 私有属性只能在类内部进行访问（修改）；但可以通过在类中添加方法使得私有属性可以被外部访问
protected 受保护的属性,只能在当前类和当前类的子类中访问(修改)


2 .js和ts封装属性的区别

由于属性是在对象中设置的，属性可以任意的被修改，将会导致对象中的数据变得非常不安全。因此需要对属性进行封装。

js封装的属性存取器使用时需要调用相应的getter和setter方法；而ts封装的属性存取器使用时可直接当作变量来用就行。

加getter和setter方法只是为了对属性的值做判断，如果不需做判断则没必要使用。

 */

(function () {
  // 定义一个表示人的类
  class Person {
    public _name: string;
    private _age: number;

    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }
    /* 
        getter 方法来读取属性
        setter 方法来设置属性
            - 他们被称为属性的存取器
    */

    /*  js中封装的属性存取器
    // 定义方法 用来获取name属性
     getName(){
         return this._name;
     }
     //  定义方法，用来设置name属性
     setName(value: string){
         this._name = value;
     }
     getAge(){
         return this._age;
     }
     setAge(value: number){
         // 判断年龄是否合法
         if(value >= 0){
             this._age = value;
         }
     } 
     */
    // TS中设置getter方法的方式
    get name() {
      console.log('get name()执行了!!');
      return this._name;
    }
    set name(value: string) {
      this._name = value;
    }
    get age() {
      return this._age;
    }
    set age(value: number) {
      if (value >= 0) {
        this._age = value
      }
    }
  }
  const per = new Person('孙悟空', 18);

  /* 
      js封装的属性存取器使用时需要调用相应的getter和setter方法；
      而ts封装的属性存取器使用时可直接当作变量来用就行
  */
  // per._name = '猪八戒';
  // per._age = -38;
  // per.setName('猪八戒');
  // per.setAge(-33);
  // console.log(per);
  per.name = '猪八戒';
  per.age = -13
  console.log(per);
})();

//在定义类时可以直接将属性定义在构造函数中（简化代码），实际上是语法糖

// class C{
//     name: string;
//     age: number;
//     // 可以直接将属性定义在构造函数中
//     constructor(name: string, age:number){
//         this.name = name;
//         this,age = age;
//     }
// }

class C {
  // 语法糖
  // 可以直接将属性定义在构造函数中
  constructor(public name: string, public age: number) {

  }
}


// 泛型
//泛型就是不确定的类型 **（定义时不确定，执行了才确定）**。在定义函数或是类时, 如果遇到类型不明确就可以使用泛型。

//在函数定义中使用

function fn<T>(a: T): T {
  return a;
}

// 可以直接调用具有泛型的函数
let result = fn(10);// 不指定泛型,TS可以自动对类型进行推断

let result2 = fn<string>('hello');//手动指定泛型


// 泛型可以同时指定多个
function fn2<T, K>(a: T, b: K): T {
  console.log(b);
  return a;
}

fn2<number, string>(123, 'hello')


//此外，还能对泛型的类型进行限制

interface Inter {
  length: number;
}

// T extends Inter 表示泛型T必须是Inter实现类(子类)
// 这里用的话即调用该函数的参数必须具有length属性，可以是数组，字符串...
function fn3<T extends Inter>(a: T): number {
  return a.length
}

fn3('124');
// fn3(1243);
fn3({ length: 10 });

//在类定义中使用

class MyClass<T>{
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}

const mc = new MyClass<string>('孙悟空');
