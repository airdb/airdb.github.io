# DHCP

Dynamic Host Configuration Protocol

Best Practice

## dhcp/conf/dhcpd.conf 

	include "/var/www/html/autoinstall/dhcp/host";
	ddns-update-style interim;
	ignore client-updates;
	allow unknown-clients;
	ping-check true;
	
	option perform-mask-discovery  true;
	option router-discovery  true;
	
	#option ntp-servers 10.4.18.10,10.4.18.11; # hz ntp
	#option time-offset -18000; # Eastern Standard Time.
	#option domain-name-servers 10.0.1.127,203.196.0.6;
	option domain-search "airdb.io";
	default-lease-time 3600;
	max-lease-time 4800;
	
	
	group host_pool {
	  default-lease-time 600;
	  max-lease-time 600;
	  allow bootp;
	  allow booting;
	  filename "/pxelinux.0";
	
	  option dhcp-renewal-time 10;
	  subnet 10.0.0.0 netmask 255.255.255.0 {
	    option subnet-mask  255.255.255.0;
	    option routers      10.0.0.1;  #default routes
	    range dynamic-bootp 10.0.0.2 10.0.0.200;
	  }
	}


##  dhcp/conf/hosts

	host rmc1.airdb.io {hardware ethernet 00:01:02:03:04:80 ;fixed-address 10.0.0.253 ;}
	host dean.airdb.io { hardware ethernet f0:76:1c:02:b1:10 ;fixed-address 10.0.0.251;}
	
	host dhcp_01 { hardware ethernet 00:8c:fa:eb:b4:bc ;fixed-address 10.0.0.01 ;}
	host h_02 { hardware ethernet 00:8c:fa:eb:b2:d4 ;fixed-address 10.0.0.02 ;}
	host h_03 { hardware ethernet 00:8c:fa:eb:b4:0c ;fixed-address 10.0.0.03 ;}
	host h_04 { hardware ethernet 00:8c:fa:eb:b8:08 ;fixed-address 10.0.0.04 ;}
	host h_05 { hardware ethernet 00:8c:fa:eb:b4:d0 ;fixed-address 10.0.0.05 ;}
	host h_06 { hardware ethernet 00:8c:fa:eb:b4:78 ;fixed-address 10.0.0.06 ;}

## /etc/xinetd.d/tftp

	service tftp
	{
		socket_type		= dgram
		protocol		= udp
		wait			= yes
		user			= root
		server			= /usr/sbin/in.tftpd
		server_args		= -B 1380 -v -s /var/www/html/autoinstall/tftpboot
		disable			= no
		per_source		= 11
		cps			= 100 2
		flags			= IPv4
	}
