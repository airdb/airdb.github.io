# Bash

## Profile 执行顺序

登录 Linux 时，首先启动 /etc/profile 文件，然后再启动用户目录下的
~/.bash_profile、 ~/.bash_login或 ~/.profile文件中的其中一个, 一般还会执行
~/.bashrc文件。

~/.bash_logout，每次退出系统或退出bash shell时,执行该文件。

❗️注意: 部分系统只读取~/.bashrc (不读取 ~/.bash_prfoile), 如 BusyBox



## Bash 环境变量

```
# 公共
$LOGNAME: 登录用户名
$HOME: 当前用户家目录
```

```
export PS1="[\u@\H \W]\\$ "
export HISTTIMEFORMAT="%F %T `whoami` "
export TMOUT=600    # 600 秒内用户无操作就字段断开终端
```


## 常用别名

```
alias ipsort="sort -t"." -k1,1n  -k2,2n  -k3,3n  -k4,4n"
alias ipsortr="sort -t"." -k1,1nr -k2,2nr -k3,3nr -k4,4nr"
```

## 常用命令

```
date +"%s"      # uninx timestamp
date -d @1548987653     # linux, unix timestamp 转 "Fri Feb  1 10:20:53 CST 2019"
sudo date -d 1548987653 # mac, unix timestamp 转 "Fri Feb  1 10:20:53 CST 2019"
jq  # Command-line JSON processor, Download from https://github.com/stedolan/jq
```
