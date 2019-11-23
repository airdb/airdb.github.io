# SSH

ssh(Secure Shell) 是典型的 C/S 框架，包含服务端(sshd) 和 客户端(ssh)

# 客户端 ssh

管理大规模机群的时候会觉得经常输入yes比较麻烦，尤其是主机重装后，还需要清理 known_hosts
文件，可以进行配置一下，这样用起来更顺手。 配置 $HOME/.ssh/config如下:
```
StrictHostKeyChecking no
UserKnownHostsFile /dev/null
ConnectTimeout 3
```

或
```
alias ssh="ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o \
ConnectTimeout=3"
```

## 服务端 sshd

配置文件 /etc/ssh/sshd_config
```
Banner /etc/ssh/banner_file      # 登录主机时显示的一个 banner，可以是欢迎语
PasswordAuthentication no
PermitRootLogin yes             # 允许root用户远程登录
```

# 生成证书
ssh-keygen  -b 2048 -C $HOSTNAME

## 排障

如果目标机器无法 ssh，可以使用 -v 参数排查详情。

::: warning
个别主机，可能会设置 /etc/hosts.allow 或 /etc/hosts.deny。
:::

