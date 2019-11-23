(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{226:function(t,e,n){"use strict";n.r(e);var a=n(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"dhcp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dhcp"}},[t._v("#")]),t._v(" DHCP")]),t._v(" "),n("p",[t._v("Dynamic Host Configuration Protocol")]),t._v(" "),n("p",[t._v("Best Practice")]),t._v(" "),n("h2",{attrs:{id:"dhcp-conf-dhcpd-conf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dhcp-conf-dhcpd-conf"}},[t._v("#")]),t._v(" dhcp/conf/dhcpd.conf")]),t._v(" "),n("pre",[n("code",[t._v('include "/var/www/html/autoinstall/dhcp/host";\nddns-update-style interim;\nignore client-updates;\nallow unknown-clients;\nping-check true;\n\noption perform-mask-discovery  true;\noption router-discovery  true;\n\n#option ntp-servers 10.4.18.10,10.4.18.11; # hz ntp\n#option time-offset -18000; # Eastern Standard Time.\n#option domain-name-servers 10.0.1.127,203.196.0.6;\noption domain-search "airdb.io";\ndefault-lease-time 3600;\nmax-lease-time 4800;\n\n\ngroup host_pool {\n  default-lease-time 600;\n  max-lease-time 600;\n  allow bootp;\n  allow booting;\n  filename "/pxelinux.0";\n\n  option dhcp-renewal-time 10;\n  subnet 10.0.0.0 netmask 255.255.255.0 {\n    option subnet-mask  255.255.255.0;\n    option routers      10.0.0.1;  #default routes\n    range dynamic-bootp 10.0.0.2 10.0.0.200;\n  }\n}\n')])]),t._v(" "),n("h2",{attrs:{id:"dhcp-conf-hosts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dhcp-conf-hosts"}},[t._v("#")]),t._v(" dhcp/conf/hosts")]),t._v(" "),n("pre",[n("code",[t._v("host rmc1.airdb.io {hardware ethernet 00:01:02:03:04:80 ;fixed-address 10.0.0.253 ;}\nhost dean.airdb.io { hardware ethernet f0:76:1c:02:b1:10 ;fixed-address 10.0.0.251;}\n\nhost dhcp_01 { hardware ethernet 00:8c:fa:eb:b4:bc ;fixed-address 10.0.0.01 ;}\nhost h_02 { hardware ethernet 00:8c:fa:eb:b2:d4 ;fixed-address 10.0.0.02 ;}\nhost h_03 { hardware ethernet 00:8c:fa:eb:b4:0c ;fixed-address 10.0.0.03 ;}\nhost h_04 { hardware ethernet 00:8c:fa:eb:b8:08 ;fixed-address 10.0.0.04 ;}\nhost h_05 { hardware ethernet 00:8c:fa:eb:b4:d0 ;fixed-address 10.0.0.05 ;}\nhost h_06 { hardware ethernet 00:8c:fa:eb:b4:78 ;fixed-address 10.0.0.06 ;}\n")])]),t._v(" "),n("h2",{attrs:{id:"etc-xinetd-d-tftp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#etc-xinetd-d-tftp"}},[t._v("#")]),t._v(" /etc/xinetd.d/tftp")]),t._v(" "),n("pre",[n("code",[t._v("service tftp\n{\n\tsocket_type\t\t= dgram\n\tprotocol\t\t= udp\n\twait\t\t\t= yes\n\tuser\t\t\t= root\n\tserver\t\t\t= /usr/sbin/in.tftpd\n\tserver_args\t\t= -B 1380 -v -s /var/www/html/autoinstall/tftpboot\n\tdisable\t\t\t= no\n\tper_source\t\t= 11\n\tcps\t\t\t= 100 2\n\tflags\t\t\t= IPv4\n}\n")])])])}),[],!1,null,null,null);e.default=r.exports}}]);