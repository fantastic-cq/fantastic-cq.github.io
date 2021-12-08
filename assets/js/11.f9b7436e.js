(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{399:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("本篇博客主要是对 Javcscript this 学习理解\n")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("我们先从一个例题开始：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let foo = '哇'\nlet obj = {\n  foo: '蛙哇'，\n  fn: function() {\n    console.log(foo)\n  }\n}\nobj.fn()\n")])])]),a("p",[s._v("最后返回的是外部的 "),a("code",[s._v("哇")]),s._v(" 属性变量， 而不是对象内部的变量。我们知道在对象内部方法中使用对象内部属性是一种常见的需求。但 JavaScript 的作用域不支持这一点，基于这个需求，JavaScript 又搞出另一套 "),a("code",[s._v("this")]),s._v(" 机制。")]),s._v(" "),a("p",[s._v("所以，在 JavaScript 中通过 "),a("code",[s._v("this")]),s._v(" 就可以访问对象里面的属性，调整上面的代码：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("fn: function() {\n  console.log(this.foo)\n}\n")])])]),a("p",[s._v("最终返回的是对象的内部属性。")]),s._v(" "),a("p",[s._v("开始之前，需要我了解的是 JavaScript 中的作用域链和 "),a("code",[s._v("this")]),s._v(" 是两套不一样的系统，他们之间没有太多的联系。")]),s._v(" "),a("h2",{attrs:{id:"javascript中this是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript中this是什么"}},[s._v("#")]),s._v(" JavaScript中this是什么")]),s._v(" "),a("p",[s._v("关于 "),a("code",[s._v("this")]),s._v("，还得从执行上下文说起，执行上下文中除了包含变量环境、词法环境、外部环境，还包含了 "),a("code",[s._v("this")]),s._v("，一图胜前言，具体可参考下图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/9/17297fddf5788ac9?w=327&h=244&f=png&s=8034",alt:"执行上下文中的this"}}),s._v("\n从图中可以看出，"),a("strong",[s._v("this 是和执行上下文绑定的")]),s._v("，也就是说每个执行上下文中都有一个 this。而执行上下文主要分为三种-全局执行上下文、函数执行上下文 和 eval 执行上下文。所以对应的 this 也分为三种-全局执行上下文中的 this、函数执行上下文中的 this 和 eval 执行上下文中的 this。")]),s._v(" "),a("p",[s._v("由于 eval 使用的不多，所以这里只讨论全局和函数执行上下文中的 this。")]),s._v(" "),a("h2",{attrs:{id:"全局执行上下文中的-this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局执行上下文中的-this"}},[s._v("#")]),s._v(" 全局执行上下文中的 this")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("console.log(this) // window\n")])])]),a("p",[s._v("你可以在控制台打印 this， 最终输出的是 window 对象。所以你可以得出这样一个结论：全局执行上下文中的 this 是指向 window 对象的。这也是 this 和作用域链的唯一交点，作用域链的最底端包含了 window 对象，全局执行上下文中的 this 也是指向 window 对象。")]),s._v(" "),a("h2",{attrs:{id:"函数执行上下文中的-this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数执行上下文中的-this"}},[s._v("#")]),s._v(" 函数执行上下文中的 this")]),s._v(" "),a("p",[s._v("现在我们知道了全局对象中 this 的指向 window 对象，那么接下来，重点分析函数执行上下文的 this，还是先看下面这段代码：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function foo(){\n  console.log(this)\n}\nfunction bar(){\n  'use strict'\n  console.log(this)\n}\n\nfoo() // window\nbar() // undefined\n")])])]),a("p",[s._v("执行上面这段代码，打印出来也是 window 对象，这说明在非严格模式的默认情况下调用函数，其执行上下文中的 this 也是指向 window 对象的。严格模式下，this 为 undefined 。估计你会好奇，那能不能设置执行上下文中的 this 来指向其他对象呢？答案是肯定的。通常情况下，有下面三种方式来设置函数执行上下文中的 this 值。")]),s._v(" "),a("h3",{attrs:{id:"_1-通过函数的call方法设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过函数的call方法设置"}},[s._v("#")]),s._v(" 1.通过函数的call方法设置")]),s._v(" "),a("p",[s._v("你可以通过函数的 call 方法来设置函数执行上下文的 this 指向，比如下面这段代码，我们就并没有直接调用 foo 函数，而是调用了 foo 的 call 方法，并将 bar 对象作为 call 方法的参数。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\nlet bar = {\n  myName : "哇",\n  test1 : 1\n}\nfunction foo(){\n  this.myName = "蛙哇"\n}\nfoo.call(bar)\nconsole.log(bar)\nconsole.log(myName)\n')])])]),a("p",[s._v("执行这段代码，然后观察输出结果，你就能发现 foo 函数内部的 this 已经指向了 bar 对象。其实除了 call 方法，你还可以使用 bind 和 apply 方法来设置函数执行上下文中的 this。")]),s._v(" "),a("h3",{attrs:{id:"_2-通过对象调用方法设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过对象调用方法设置"}},[s._v("#")]),s._v(" 2. 通过对象调用方法设置")]),s._v(" "),a("p",[s._v("要改变函数执行上下文中的 this 指向，除了通过函数的 call 方法来实现外，还可以通过对象调用的方式，比如下面这段代码：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\nvar myObj = {\n  name : "蛙哇", \n  showThis: function(){\n    console.log(this)\n  }\n}\nmyObj.showThis()\n')])])]),a("p",[s._v("执行这段代码，你可以看到，最终输出的 this 值是指向 myObj 的。")]),s._v(" "),a("p",[s._v("所以，你可以得出这样的结论："),a("strong",[s._v("使用对象来调用其内部的一个方法，该方法的 this 是指向对象本身的")]),s._v("。")]),s._v(" "),a("p",[s._v("其实，你也可以认为 JavaScript 引擎在执行"),a("code",[s._v("myObject.showThis()")]),s._v("时，将其转化为了：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("myObj.showThis.call(myObj)\n")])])]),a("p",[s._v("接下来我们稍微改变下调用方式，把 showThis 赋给一个全局对象，然后再调用该对象，代码如下所示：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\nvar myObj = {\n  name : "哇",\n  showThis: function(){\n    this.name = "蛙哇"\n    console.log(this)\n  }\n}\nvar foo = myObj.showThis\nfoo()\n')])])]),a("p",[s._v("执行这段代码，你会发现 this 又指向了全局 window 对象。")]),s._v(" "),a("p",[s._v("所以通过以上两个例子的对比，你可以得出下面这样两个结论：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("在全局环境中调用一个函数，函数内部的 this 指向的是全局变量 window")]),s._v("。")]),s._v(" "),a("li",[a("strong",[s._v("通过一个对象来调用其内部的一个方法，该方法的执行上下文中的 this 指向对象本身")]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"_3-通过构造函数中设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过构造函数中设置"}},[s._v("#")]),s._v(" 3. 通过构造函数中设置")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function CreateObj(){\n  this.name = "蛙哇"\n}\nvar myObj = new CreateObj()\n')])])]),a("p",[s._v("在这段代码中，我们使用 new 创建了对象 myObj，那你知道此时的构造函数 CreateObj 中的 this 到底指向了谁吗？其实，当执行 new CreateObj() 的时候，JavaScript 引擎做了如下四件事：")]),s._v(" "),a("ul",[a("li",[s._v("首先创建了一个空对象 tempObj；")]),s._v(" "),a("li",[s._v("接着调用 CreateObj.call 方法，并将 tempObj 作为 call 方法的参数，这样当 CreateObj 的执行上下文创建时，它的 this 就指向了 tempObj 对象；")]),s._v(" "),a("li",[s._v("然后执行 CreateObj 函数，此时的 CreateObj 函数执行上下文中的 this 指向了 tempObj 对象；")]),s._v(" "),a("li",[s._v("最后返回 tempObj 对象。")])]),s._v(" "),a("p",[s._v("为了直观理解，我们可以用代码来演示下：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  var tempObj = {}\n  CreateObj.call(tempObj)\n  return tempObj\n")])])]),a("h2",{attrs:{id:"this-缺陷和解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-缺陷和解决方案"}},[s._v("#")]),s._v(" this 缺陷和解决方案")]),s._v(" "),a("h3",{attrs:{id:"_1-嵌套函数中的-this-不会从外层函数中继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-嵌套函数中的-this-不会从外层函数中继承"}},[s._v("#")]),s._v(" 1. 嵌套函数中的 this 不会从外层函数中继承")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var myObj = {\n  name : "蛙哇", \n  showThis: function(){\n    console.log(this)\n    function bar(){console.log(this)}\n    bar()\n  }\n}\nmyObj.showThis()\n')])])]),a("p",[s._v("执行这段代码后，你会发现函数 bar 中的 this 指向的是全局 window 对象，而函数 showThis 中的 this 指向的是 myObj 对象。这就是 JavaScript 中非常容易让人迷惑的地方之一，也是很多问题的源头。")]),s._v(" "),a("p",[a("strong",[s._v("你可以通过一个小技巧来解决这个问题")]),s._v("，比如在 showThis 函数中声明一个变量 self 用来保存 this，然后在 bar 函数中使用 self，代码如下所示：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\nvar myObj = {\n  name : "蛙哇", \n  showThis: function(){\n    console.log(this)\n    var self = this\n    function bar(){\n      self.name = "哇"\n    }\n    bar()\n  }\n}\nmyObj.showThis()\nconsole.log(myObj.name)\nconsole.log(window.name)\n')])])]),a("p",[s._v("执行这段代码，你可以看到它输出了我们想要的结果，最终 myObj 中的 name 属性值变成了“哇”。其实，这个方法的的本质是把 this 体系转换为了作用域的体系。")]),s._v(" "),a("p",[s._v("其实，"),a("strong",[s._v("你也可以使用 ES6 中的箭头函数来解决这个问题")]),s._v("，结合下面代码：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\nvar myObj = {\n  name : "蛙哇", \n  showThis: function(){\n    console.log(this)\n    var bar = ()=>{\n      this.name = "哇"\n      console.log(this)\n    }\n    bar()\n  }\n}\nmyObj.showThis()\nconsole.log(myObj.name)\nconsole.log(window.name)\n')])])]),a("p",[s._v("执行这段代码，你会发现它也输出了我们想要的结果，也就是箭头函数 bar 里面的 this 是指向 myObj 对象的。这是因为 ES6 中的箭头函数并不会创建其自身的执行上下文，所以箭头函数中的 this 取决于它的外部函数。")]),s._v(" "),a("p",[s._v("通过上面的讲解，你现在应该知道了 this 没有作用域的限制，这点和变量不一样，所以嵌套函数不会从调用它的函数中继承 this，这样会造成很多不符合直觉的代码。要解决这个问题，你可以有两种思路：")]),s._v(" "),a("ul",[a("li",[s._v("第一种是把 this 保存为一个 self 变量，再利用变量的作用域机制传递给嵌套函数。")]),s._v(" "),a("li",[s._v("第二种是继续使用 this，但是要把嵌套函数改为箭头函数，因为箭头函数没有自己的执行上下文，所以它会继承调用函数中的 this。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);