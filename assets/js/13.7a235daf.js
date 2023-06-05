(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{408:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"let"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let"}},[t._v("#")]),t._v(" let")]),t._v(" "),a("p",[t._v("let声明的变量只在所处的块级有效 {}\n不存在变量提升\n暂时性死区")]),t._v(" "),a("h3",{attrs:{id:"const"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#const"}},[t._v("#")]),t._v(" const")]),t._v(" "),a("p",[t._v("作用：声明常量，常量就是值（内存地址）不能变化的量\n具有块级作用域\n声明常量必须赋值\n常量赋值后，值不能修改（基本数据类型的值不可更改，复杂数据类型不可以重新赋值，内部的值可以改）")]),t._v(" "),a("h3",{attrs:{id:"let、const、var的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let、const、var的区别"}},[t._v("#")]),t._v(" let、const、var的区别")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("var")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("let")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("const")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("函数级作用域")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("块级作用域")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("块级作用域")])]),t._v(" "),a("tr",[a("td",[t._v("变量提升")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("不存在变量提升")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("不存在变量提升")])]),t._v(" "),a("tr",[a("td",[t._v("值可更改")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("值可更改")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("值不可更改")])])])]),t._v(" "),a("h3",{attrs:{id:"解构赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解构赋值"}},[t._v("#")]),t._v(" 解构赋值")]),t._v(" "),a("p",[t._v("ES6中允许从数组中提取值，按照对应位置，对变量赋值，对象也可以实现解构")]),t._v(" "),a("p",[t._v("数组解构允许我们按照一一对应的关系从数组中提取值 然后将值赋值给变量\n对象解构允许我们使用变量的名字匹配对象的属性 匹配成功 将对象属性的值赋值给变量\nlet { name, age, sex } = person;\nlet {name: myName} = person;")]),t._v(" "),a("h3",{attrs:{id:"箭头函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数"}},[t._v("#")]),t._v(" 箭头函数")]),t._v(" "),a("p",[t._v("箭头函数是用来简化函数定义语法的\nconst fn () => {}\n函数体中只有一句代码，且代码执行结果就是返回值，可以省略大括号\n在箭头函数中 如果形参只有一个 形参外侧的小括号也是可以省略的")]),t._v(" "),a("p",[t._v("箭头函数不绑定this 箭头函数没有自己的this关键字 如果在箭头函数中使用this this关键字将指向箭头函数定义位置中的this")]),t._v(" "),a("h3",{attrs:{id:"剩余参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#剩余参数"}},[t._v("#")]),t._v(" 剩余参数")]),t._v(" "),a("p",[t._v("剩余参数语法允许我们将一个不定量的参数表示为一个数组\nlet ary1 = ['张三' , '李四', '王五'];\nlet [s1, ...s2] = ary1;")]),t._v(" "),a("h3",{attrs:{id:"拓展运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拓展运算符"}},[t._v("#")]),t._v(" 拓展运算符")]),t._v(" "),a("p",[t._v("拓展运算符可以将数组或者对象转为用逗号分隔的参数序列\n可以用于合并数组")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ary3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("ary1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("ary2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("利用扩展运算符可以将伪数组转换为真正的数组")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" oDivs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oDivs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ary "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("oDivs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"array的扩展方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array的扩展方法"}},[t._v("#")]),t._v(" Array的扩展方法")]),t._v(" "),a("p",[t._v("Array.from()\n将类数组或可遍历对象转换为真正的数组\n方法还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放回返回的数组")]),t._v(" "),a("h4",{attrs:{id:"find"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[t._v("#")]),t._v(" find()")]),t._v(" "),a("p",[t._v("用于找出第一个符合条件的数组成员，如果没有找到返回undefined")]),t._v(" "),a("h4",{attrs:{id:"findindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findindex"}},[t._v("#")]),t._v(" findIndex()")]),t._v(" "),a("p",[t._v("用于找出第一个符合条件的数组成员的位置，如果没有找到返回-1")]),t._v(" "),a("h4",{attrs:{id:"includes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#includes"}},[t._v("#")]),t._v(" includes()")]),t._v(" "),a("p",[t._v("表示某个数组是否包含给定的值，返回布尔值")]),t._v(" "),a("h3",{attrs:{id:"string的扩展方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string的扩展方法"}},[t._v("#")]),t._v(" String的扩展方法")]),t._v(" "),a("p",[t._v("模板字符串\nES6新增的创建字符串的方式，使用反引号定义\n1.模板字符串中可以解析变量\n2.模板字符串中可以换行\n3.模板字符串中可以调用函数")]),t._v(" "),a("h4",{attrs:{id:"startwith-和endwith"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#startwith-和endwith"}},[t._v("#")]),t._v(" startWith()和endWith()")]),t._v(" "),a("p",[t._v("startsWidth():表示参数字符串是否在原字符串的头部，返回布尔值\nendsWith():表示参数字符串是否在原字符串的尾部，返回布尔值")]),t._v(" "),a("h4",{attrs:{id:"repeat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repeat"}},[t._v("#")]),t._v(" repeat()")]),t._v(" "),a("p",[t._v("repeat方法表示将原字符串重复n次，返回一个新的字符串")]),t._v(" "),a("h3",{attrs:{id:"set数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set数据结构"}},[t._v("#")]),t._v(" Set数据结构")]),t._v(" "),a("p",[t._v("ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值\n可以利用set数据结构做数组去重")]),t._v(" "),a("h4",{attrs:{id:"实例方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例方法"}},[t._v("#")]),t._v(" 实例方法")]),t._v(" "),a("p",[t._v("add(value):添加某个值，返回Set结构本身\ndelete(value):删除某个值，返回一个布尔值，表示删除是否成功\nhas(value):返回一个布尔值，表示该值是否为Set的成员\nclear():清除所有成员，没有返回值")]),t._v(" "),a("h4",{attrs:{id:"遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遍历"}},[t._v("#")]),t._v(" 遍历")]),t._v(" "),a("p",[t._v("s.forEach(value => console.log(value))")])])}),[],!1,null,null,null);a.default=e.exports}}]);