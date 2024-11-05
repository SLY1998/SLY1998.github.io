(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{489:function(s,a,r){"use strict";r.r(a);var t=r(1),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[s._v("#")]),s._v(" 模块")]),s._v(" "),a("p",[s._v("在编写每个模块时，都有 require、exports、module 三个预先定义好的变量可供使用。")]),s._v(" "),a("p",[s._v("NodeJS 使用 CMD 模块系统，主模块作为程序入口点，所有模块在执行过程中只初始化一次。")]),s._v(" "),a("p",[a("strong",[s._v("require")])]),s._v(" "),a("p",[s._v("require 函数用于在当前模块中加载和使用别的模块，传入一个模块名，返回一个模块导出对象")]),s._v(" "),a("p",[a("strong",[s._v("exports")])]),s._v(" "),a("p",[s._v("exports 对象是当前模块的导出对象，用于导出模块公有方法和属性")]),s._v(" "),a("p",[a("strong",[s._v("module")])]),s._v(" "),a("p",[s._v("通过 module 对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块的导出对象")]),s._v(" "),a("h2",{attrs:{id:"代码组织和部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码组织和部署"}},[s._v("#")]),s._v(" 代码组织和部署")]),s._v(" "),a("h3",{attrs:{id:"模块路径解析规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块路径解析规则"}},[s._v("#")]),s._v(" 模块路径解析规则")]),s._v(" "),a("p",[s._v("require 函数支持第三种形式的路径，写法类似于 foo/bar，并依次按照以下规则解析路径，直到找到模块位置。")]),s._v(" "),a("ol",[a("li",[s._v("内置模块：如果传递给 require 函数的是 NodeJS 内置模块名称，不做路径解析，直接返回内部模块的导出对象，例如 require('fs')。")]),s._v(" "),a("li",[s._v("node_modules 目录")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// NodeJS定义了一个特殊的node_modules目录用于存放模块。例如某个模块的绝对路径是/home/user/hello.js，在该模块中使用require('foo/bar')方式加载模块时，则NodeJS依次尝试使用以下路径")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bar\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bar\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bar\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("NODE_PATH 环境变量")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 例如定义了以下NODE_PATH环境变量：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当使用require('foo/bar')的方式加载模块时，则NodeJS依次尝试以下路径。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bar\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bar\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"包-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包-package"}},[s._v("#")]),s._v(" 包（package）")])])}),[],!1,null,null,null);a.default=e.exports}}]);