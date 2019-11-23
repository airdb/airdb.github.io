(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{222:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[s._v("#")]),s._v(" SSH")]),s._v(" "),a("p",[s._v("ssh(Secure Shell) 是典型的 C/S 框架，包含服务端(sshd) 和 客户端(ssh)")]),s._v(" "),a("h1",{attrs:{id:"客户端-ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端-ssh"}},[s._v("#")]),s._v(" 客户端 ssh")]),s._v(" "),a("p",[s._v("管理大规模机群的时候会觉得经常输入yes比较麻烦，尤其是主机重装后，还需要清理 known_hosts\n文件，可以进行配置一下，这样用起来更顺手。 配置 $HOME/.ssh/config如下:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("StrictHostKeyChecking no\nUserKnownHostsFile /dev/null\nConnectTimeout 3\n")])])]),a("p",[s._v("或")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('alias ssh="ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o \\\nConnectTimeout=3"\n')])])]),a("h2",{attrs:{id:"服务端-sshd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端-sshd"}},[s._v("#")]),s._v(" 服务端 sshd")]),s._v(" "),a("p",[s._v("配置文件 /etc/ssh/sshd_config")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Banner /etc/ssh/banner_file      # 登录主机时显示的一个 banner，可以是欢迎语\nPasswordAuthentication no\nPermitRootLogin yes             # 允许root用户远程登录\n")])])]),a("h1",{attrs:{id:"生成证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成证书"}},[s._v("#")]),s._v(" 生成证书")]),s._v(" "),a("p",[s._v("ssh-keygen  -b 2048 -C $HOSTNAME")]),s._v(" "),a("h2",{attrs:{id:"排障"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排障"}},[s._v("#")]),s._v(" 排障")]),s._v(" "),a("p",[s._v("如果目标机器无法 ssh，可以使用 -v 参数排查详情。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("个别主机，可能会设置 /etc/hosts.allow 或 /etc/hosts.deny。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);