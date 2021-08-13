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




