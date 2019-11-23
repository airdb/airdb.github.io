# 常见问题

## 表结构

[Discuz!X/数据库字典](http://wiki.blueidea.com/index.php?title=Discuz!X/数据库字典)


## 更新记录

### 1. UC通信息不成功

相关文件：config/config_ucenter.php, uc_server/data/config.inc.php

表：pre_ucenter_applications

说明：新 Discuz X3.4 集成了 uc-center, 所以配置路径不需要加/uc_center。 在页面可以抓到访问的地址是 https://bbs.example.com/api/./uc.php

处理方法：
	1. uc_server/data/config.inc.php 中增加编码配置 define('CHARSET', 'utf-8');
	2. ucenter -> UCenter 设置 -> 检查 uc key 是否合法(与config_ucenter.php是否相同)， 确认后提交即可。

参考：https://jingyan.baidu.com/article/48b37f8d4745c21a646488a0.html


### 2. 复制短连接问题

文件：/template/default/forum/viewthread.htm

处理方法： 查找，lang share_url_copy , 删除此行中$fromuid。

参考：[http://www.discuz.net/thread-3642983-1-1.html](http://www.discuz.net/thread-3642983-1-1.html)


### 3. 无上传按钮

原因：chrome不支持跨站点小swf文件访问

处理办法：static/js/upload.js static/js/swfupload.js 文件,  swf地址改为 "/static/image/common/swfupload.swf" 不使用 CDN 地址, 直接走论坛站点。


### 4. 乱码问题

1. uc_server/data/config.inc.php 中增加编码配置 define('CHARSET', 'utf-8');

2. default/forum/discuz.htm newsetuser 显示乱码，暂时屏蔽了。后面找时间看。

### 5. Logo及图片问题

这个很好解决，给一个正确的地址和图片即可。

favicon.ico: 一定保证论坛文件正确，这个文件，不走 CDN

其他图片： 大多数是使用 CDN 的， 需要保证 CDN 上图片正确。


### 6. Discuz! 文章标题省略号

source/include/portalcp/portalcp_article.php

$_POST['title'] = getstr(trim($_POST['title'])

https://shipengliang.com/program-code/discuz-文章标题省略号如何去除.html

http://www.discuz.net/forum.php?mod=viewthread&tid=3422733

	``` else if(mb_strlen(theform.subject.value) > 120)```
static/js/forum_post.js
static/js/forum.js



### 7. 头像问题

source/function/function_core.php

$ucenterurl = empty($ucenterurl) ? $_G['setting']['ucenterurl'] : $ucenterurl;

下方增加

$ucenterurl_s = '//avatar.baobeihuijia.com/uc_server';

$file = $ucenterurl.'/data/avatar/'.$dir1.'/'.$dir2.'/'.$dir3.'/'.substr($uid, -2).($real ? '_real' : '').'_avatar_'.$size.'.jpg';

替换为

$file = $ucenterurl_s.'/data/avatar/'.$dir1.'/'.$dir2.'/'.$dir3.'/'.substr($uid, -2).($real ? '_real' : '').'_avatar_'.$size.'.jpg';


### 8. 用户注册未定操作

针对重新创建过表的情况，建议检查 pre_ucenter_member 表，确保 uid 默认值不为 0， 且自增涨。


### 9. UC 通知失败

在默认 UC 正常通信的情况下，且使用 utf-8 站点时，应该是 xml文件格式是 ISO-8859-1 导致的

修改 uc_client/lib/xml.class.php 查找 2 处 SO-8859-1，并替换成 UTF-8。

### 10. 分类丢失问题

解决办法：管理中心-> 论坛 ->   版块管理  --> 编辑  --> 其他 --> 主题分类 --> 主题分类启用 --> 提交

### 11. 用户存在问题

思路：用户表主要存在 pre_common_member(关联贴子等论坛信息) 和 pre_ucenter_members (uc中心), 通过一处信息修复另外一处理即可。 uc 中用户丢失，修复时不会影响论坛贴子。

注意： 修复 pre_common_member 有可能会影响论坛贴子, 或修复不彻底问题。

本次操作两名用户：婧薇(pre_ucenter_members 数据丢失)，水质的流苏(pre_common_member 数据丢失)
insert into pre_ucenter_members(uid,username,password,email,regip,regdate,salt) values() ;

insert into  pre_common_member(uid, email, username, password, regdate ) values() ;

绕月的云( pre_ucenter_members 数据丢失)

### 12. Discuz!您当前的访问请求当中含有非法字符，已经被系统拒绝解决办法

修改 ./source/class/discuz/discuz_application.php 文件。

参考 https://blog.csdn.net/lih062624/article/details/69388016

### 2019.04.18
  分类：修改用户名

  胥冰洁 -> 凯里糖果果

### 2019.04.24
  分类: 帐号被删除

  pre_common_member 表增加 蓝喵

### 2019.04.26
  分类：修改用户名

  用户名：西安雁塔小梅   改成 西安雁塔诗琪
  用户名：沛县-安国-佳佳 改成 江苏道

### 2019.04.29
  分类：修改用户名

  用户名：秋水无痕1  改成  三平人生
###  修改用户名
  用户名：王涛  改名  涛哥 (2019.04.30)

  用户名：田茂荣 改名 眀德慧  (2019.05.06)
  webshell  -> 花都东仔
  2685390002 ->




  :x



