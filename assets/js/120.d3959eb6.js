(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{211:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mac-初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-初始化"}},[t._v("#")]),t._v(" Mac 初始化")]),t._v(" "),a("h2",{attrs:{id:"homebrew-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-安装"}},[t._v("#")]),t._v(" Homebrew 安装")]),t._v(" "),a("p",[t._v('ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"')]),t._v(" "),a("p",[t._v("brew install wget")]),t._v(" "),a("p",[t._v("brew install nodejs")]),t._v(" "),a("p",[t._v("brew install tree")]),t._v(" "),a("h2",{attrs:{id:"修改主机名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改主机名"}},[t._v("#")]),t._v(" 修改主机名")]),t._v(" "),a("p",[t._v("sudo scutil --set HostName 新的主机名")]),t._v(" "),a("h2",{attrs:{id:"github-remote-permission-to-git-denied-to-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-remote-permission-to-git-denied-to-user"}},[t._v("#")]),t._v(" github remote: Permission to .git denied to user.")]),t._v(" "),a("p",[t._v("解决方案")]),t._v(" "),a("p",[t._v("这个解决方案其实很简单。首先，我用的是mac电脑，mac电脑有个keychain的应用即钥匙串访问，这里存储了github先前访问的密码，所以每次push的时候都会读取这个本地用户名及密码，所以才被github denied。")]),t._v(" "),a("p",[t._v("解决步骤哦依次如下：打开 应用程序 ----\x3e 钥匙串访问 ----\x3e双击，即可进入到钥匙串访问记录保存页面，选择github.com名称的应用，右键删除即可。")]),t._v(" "),a("h2",{attrs:{id:"修改磁盘名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改磁盘名"}},[t._v("#")]),t._v(" 修改磁盘名")]),t._v(" "),a("p",[t._v("diskutil info disk1s1")]),t._v(" "),a("p",[t._v("diskutil rename oldname  newname")]),t._v(" "),a("h2",{attrs:{id:"mac下解决lc-ctype警告的最简单方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac下解决lc-ctype警告的最简单方法"}},[t._v("#")]),t._v(" Mac下解决LC_CTYPE警告的最简单方法")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://jingyan.baidu.com/article/fdbd4277c564c8b89e3f48eb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("terminal 去掉set locale environment"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"ssh连接服务器一段时间不操作之后卡死的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh连接服务器一段时间不操作之后卡死的问题"}},[t._v("#")]),t._v(" SSH连接服务器一段时间不操作之后卡死的问题")]),t._v(" "),a("p",[t._v("卡死是因为LIUNX安全设置问题，在一段时间内没有使用数据的情况下会自动断开，解决方法就是让本地或者服务器隔一段时间发送一个请求给对方即可")]),t._v(" "),a("p",[t._v("~/.ssh/config 中增加如下配置即可。\n#每隔50秒就向服务器发送一个请求\nServerAliveInterval 50\n#允许超时的次数，一般都会响应\nServerAliveCountMax 3")])])}),[],!1,null,null,null);e.default=s.exports}}]);