
function Global() {

   // 缓存到构造函数的静态方法中
   // 弊端是外部可以修改实例属性
   if ( typeof Global.instance === 'object' ) {
       return Global.instance;
   }
   Global.instance = this;

   // 初始化
   this.name = 'Singleton';
   this.age = 12;
}

var g1 = new Global();
var g2 = new Global();

console.log( g1 === g2);



// 推荐
var Person = (function () {
    // 缓存到闭包中
    var instance; 

    function per() {
       if ( typeof instance === 'object' ) {
           return instance;
       }

       instance = this;
       // 初始化
       this.name = 'Singleton';
       this.age = 123;
    }

    return per;
})()

var p1 = new Person();
var p2 = new Person();
console.log(p1 === p2);
