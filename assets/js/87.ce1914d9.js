(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{310:function(t,a,n){"use strict";n.r(a);var r=n(17),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"golang的安装配置golint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#golang的安装配置golint"}},[t._v("#")]),t._v(" Golang的安装配置golint")]),t._v(" "),n("h2",{attrs:{id:"_1-下载并编译golint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载并编译golint"}},[t._v("#")]),t._v(" 1 下载并编译golint")]),t._v(" "),n("h4",{attrs:{id:"方法一-官网下载代码编译成golint-exe"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法一-官网下载代码编译成golint-exe"}},[t._v("#")]),t._v(" 方法一 官网下载代码编译成golint.exe")]),t._v(" "),n("ul",[n("li",[t._v("下载golang 的 lint，下载地址："),n("a",{attrs:{href:"https://github.com/golang/lint",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/golang/lint"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("解压文件到$GOPATH/src/github.com/golang/lint")]),t._v(" "),n("li",[t._v("到目录$GOPATH/src/github.com/golang/lint/golint中运行go build ./")]),t._v(" "),n("li",[t._v("在当前目录有golint的可执行程序")])]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("# 当然，最简单的方式是：\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" get github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("golang"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lint\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" install github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("golang"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lint\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("h4",{attrs:{id:"方法二-下载我已经编译好的golint-exe（推荐）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法二-下载我已经编译好的golint-exe（推荐）"}},[t._v("#")]),t._v(" 方法二 下载我已经编译好的golint.exe（推荐）")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://pan.baidu.com/s/1YQa5m-5uhJ1JenAY4jWAfQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"_2-文件拷贝到c-go-bin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-文件拷贝到c-go-bin"}},[t._v("#")]),t._v(" 2 文件拷贝到C:\\Go\\bin")]),t._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"拷贝golint到bin",href:"/img/goImage/拷贝golint到bin.png"}},[n("img",{attrs:{src:"/img/goImage/%E6%8B%B7%E8%B4%9Dgolint%E5%88%B0bin.png",alt:"拷贝golint到bin"}})])]),t._v(" "),n("h2",{attrs:{id:"_3-配置goland的golint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置goland的golint"}},[t._v("#")]),t._v(" 3 配置Goland的golint")]),t._v(" "),n("h4",{attrs:{id:"_3-1-打开setting对话框"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-打开setting对话框"}},[t._v("#")]),t._v(" 3.1 打开setting对话框")]),t._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"配置golint",href:"/img/goImage/配置golint.png"}},[n("img",{attrs:{src:"/img/goImage/%E9%85%8D%E7%BD%AEgolint.png",alt:"配置golint"}})])]),t._v(" "),n("p",[t._v("配置参数说明：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Program")]),t._v(" "),n("td",[t._v("C:\\Go\\bin\\golint.exe")])]),t._v(" "),n("tr",[n("td",[t._v("Arguments")]),t._v(" "),n("td",[t._v("$FilePath$")])]),t._v(" "),n("tr",[n("td",[t._v("Working directory")]),t._v(" "),n("td",[t._v("$ProjectFileDir$")])])])]),t._v(" "),n("h4",{attrs:{id:"_3-2-给golint设置一个快捷键"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-给golint设置一个快捷键"}},[t._v("#")]),t._v(" 3.2 给golint设置一个快捷键")]),t._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"添加快捷键",href:"/img/goImage/添加快捷键.png"}},[n("img",{attrs:{src:"/img/goImage/%E6%B7%BB%E5%8A%A0%E5%BF%AB%E6%8D%B7%E9%94%AE.png",alt:"添加快捷键"}})])]),t._v(" "),n("p",[t._v("以后使用ALT+L即可")]),t._v(" "),n("h2",{attrs:{id:"_4-简单使用golint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-简单使用golint"}},[t._v("#")]),t._v(" 4 简单使用golint")]),t._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"简单演示golint",href:"/img/goImage/简单演示golint.png"}},[n("img",{attrs:{src:"/img/goImage/%E7%AE%80%E5%8D%95%E6%BC%94%E7%A4%BAgolint.png",alt:"简单演示golint"}})])])])}),[],!1,null,null,null);a.default=e.exports}}]);