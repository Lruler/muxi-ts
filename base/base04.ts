// 类
class Person{
   /* 
        直接定义的属性是实例属性，需要通过对象的实例去访问；
            const per = new Person();
            per.name
        使用static的开头的属性是静态属性（类型），可以直接通过类去访问
            Person.age
        readonly 开头的属性表示一个只读的属性无法修改
    */
    
    //定义实例属性
    // name: string = '孙悟空';
    // readonly name: string = '孙悟空';
  
  name = '孙悟空';
  // 在属性前使用static关键字可以定义类属性（静态属性）
    // static readonly age: number = 18;
   static age = 18;

    //定义方法
    /* 
        如果方法以static开头则方法就是类方法，可以直接通过类去调用
    */
  
  sayNb() {
    console.log('伞兵一号卢本伟准备就绪！');
  }

  static sayNb2() {
    console.log('秒杀我？你十七张牌能秒杀我？');
    
  }
}

const per = new Person();

console.log(per)
console.log(Person);
console.log(per.name, Person.age);
per.sayNb()
Person.sayNb2()

// 构造器
class  Dog {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      // 在实例方法中，this就表示当前的实例
      // 在构造函数中当前对象就是当前新建的那个对象
      // 可以通过this向新建的对象中添加属性
      // console.log(this);
      this.name = name,
      this.age = age
  }

  bark(){
      alert('汪汪汪！！');
      console.log(this.name);
  }
}

const dog = new Dog('小黑', 4);
const dog2 = new Dog('小白', 2);

console.log(dog);
console.log(dog2);
dog.bark();

// 使用extends继承后，子类将会拥有父类所有的方法和属性

// 通过继承可以将多个类中共有的代码写在一个父类，这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法

// 如果子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法。这种子类覆盖掉父类方法的形式，我们称为重写

(function (){
  // 定义一个Animal类
  class Animal{
      name: string;
      age: number;
      constructor(name: string, age: number){
          this.name = name;
          this.age = age;
      }

      sayHello(){
          console.log('动物在叫!!');
      }
  }

  //定义一个表示狗的类
  //使Dog类继承Animal类（此时，Animal被称为父类，Dog被称为子类）
  class Dog extends Animal{
      run(){
          console.log(`${this.name}在跑啊~~`);
      }
      
      sayHello(){
          console.log('汪汪汪!!');
      }
  }

  // 定义一个猫的类
  //使Cat类继承Animal类
  class Cat extends Animal{
      sayHello(){
          console.log('喵喵喵!!');
      }
  }

  const dog = new Dog('旺财', 5);
  const cat = new Cat('咪咪', 3);
  console.log(dog);
  dog.sayHello();
  dog.run();
  console.log(cat);
  cat.sayHello();
})();

// super，在类的方法中，super表示当前类的父类（也叫超类）
// 如果在子类中写了构造函数，则在子类构造函数中必须对父类的构造函数进行调用
(function () {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello() {
      console.log('动物在叫~~')
    }
  }

  class Dog extends Animal {

    age: number

    constructor(name: string, age: number) {
      //如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
      super(name);//调用父类的构造函数
      this.age = age;
    }

    sayHello() {
      // 在类的方法中 super就表示当前类的父类
      // super.sayHello();
      console.log('汪汪汪~~')
    }
  }

  const dog = new Dog("旺财", 3);
  dog.sayHello();
})();

// 抽象类
// 以abstract 开头的类是抽象类

// 抽象类和其他类区别不大，只是不能用来创建对象

// 抽象类就是专门用来被继承的类

// 抽象类中可以添加抽象方法
// 抽象方法：抽象方法使用abstract开头，没有方法体；抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写。
(function () {
  abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    // 定义一个抽象方法
    // 抽象方法使用abstract开头，没有方法体
    // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    abstract sayHello(): void;
  }

  class Dog extends Animal {
    sayHello() {
      console.log('汪汪汪~~')
    }
  }

  class Cat extends Animal {
    sayHello() {
      console.log('喵喵喵~~')
    }
  }

  const dog = new Dog("旺财");
  dog.sayHello();

  // const an = new Animal();//无法创建抽象类的实例
  dog.sayHello();
})();

  // 接口

  // 接口用来定义一个类结构, 用来定义一个类中应该包含哪些属性和方法；同时接口也可以当成类型声明去使用。

  // 特点

  // 接口可以在定义类的时候去限制类的结构
  // 接口中所有的属性都不能有实际的值
  // 接口只定义对象的结构，而不考虑实际值
  // 在接口中所有的方法都是抽象类

  // 基本使用
  (function () {
    interface myInter {
      name: string;
        
      sayHello(): void;
    }
    /* 
        定义类时，可以使类去实现一个接口
            实现接口就是使类满足接口的要求
    */
    class MyClass implements myInter {
      name: string;

      constructor(name: string) {
        this.name = name;
      }

      sayHello() {
        console.log("大家好~~~");
      }
    }
  })();

  // 当作类声明
(function () {
  interface myInterface {
    name: string;
    age: number;
  }

  interface myInterface {
    gender: string;
  }

  const obj: myInterface = {
    name: 'sss',
    age: 111,
    gender: '男'
  }
})();


//此外，对象的类型声明还有一种方法——用别名
(function() {
    // 描述一个对象的类型
    type myType = {
        name: string,
        age: number
    };

	const obj: myType = {
        name: 'sss',
        age: 111,
    }
})()

/**接口与抽象类类似，区别在于

抽象类可以有抽象方法也可以有普通方法；但接口只能有抽象方法
抽象类使用extends继承；接口使用implements实现
 */