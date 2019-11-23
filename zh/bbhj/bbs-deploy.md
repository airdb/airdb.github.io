# 论坛部署

## 主机初始化

###1. 安装 Nginx###

	`sudo yum install pcre-devel zlib-devel
	`./configure --prefix=/data/app/nginx --with-compat --add-dynamic-module=nginx-ipip-module 
	`make && make install

###日志清理###

	/etc/logrotate.d/nginx

/data/app/nginx/logs/error.log {
    su work work
    create 0644 work work
    daily
    rotate 10
    missingok
    notifempty
    compress
    sharedscripts
    postrotate
        /bin/kill -USR1 `cat /data/app/nginx/run/nginx.pid 2>/dev/null` 2>/dev/null || true
    endscript
}

###3. PHP71 安装###

	yum install epel-release
	rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
    yum install  php71w-xml php71w-process php71w-mbstring php71w-mysql php71w-gd php71w-common php71w-cli php71w-pear php71w-opcache php71w-bcmath php71w-pdo php71w-devel php71w-fpm php71w-pecl-imagick mod_php71w php71w-pecl-apcu

	/etc/php-fpm.d/www.conf

###4. 设置安全组策略###

	1. 默认安全组放通全部端口

	2. ssh http https icmp

	3. default

###5. 挂载cosfs###

/usr/local/bin/cosfs attachment-10016990 /mnt -ourl=cos.ap-shanghai.myqcloud.com -odbglevel=info -oallow_other


## PHP-FPM 配置

```
; /etc/php-fpm.d/www.conf
daemonize = yes


[www]
user = work
group = work

listen = 0.0.0.0:9000
; listen.allowed_clients is any.
; listen.allowed_clients = 127.0.0.1,10.0.1.144

pm = dynamic
pm.max_children = 50
pm.start_servers = 5
pm.min_spare_servers = 5
pm.max_spare_servers = 35

php_value[session.save_handler] = files
php_value[session.save_path]    = /var/lib/php/session
php_value[soap.wsdl_cache_dir]  = /var/lib/php/wsdlcache

access.log = /data/logs/php-fpm/$pool.access.log
access.format = "%R %u %s %m %{HTTP_HOST}e%r?%q"
slowlog = /data/logs/php-fpm/php-www-slow.log
php_admin_flag[log_errors] = on
php_admin_value[error_log] = /data/logs/php-fpm/php-www-error.log

chdir = /data/app/bbs.baobeihuijia.com
```
