// 桥接模式


// 分离抽象和具体实现，使得2者可以独立变化而不干扰
Function.prototype.method = function (name, fn) {
    this.prototype[name] = fn;
    return this;
};


var Person = function () {
   this.name = 'Bridge' ;
   this.age = '12';
};

Person.method('say',function(){
    console.log("hello");
}).
method('eat',function(){
    console.log("eat");
});

var p = new Person();
p.say();
p.eat();

