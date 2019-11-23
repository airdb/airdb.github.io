---
sidebar: auto
---

# NodeJS 初识

## 安装 nodejs-8

    # curl -sL https://rpm.nodesource.com/setup_8.x | bash -
    # yum install nodejs

## 设置

   查看 npm 设置 
   npm config get 
   
   设置 taobao registry （原因是国外的包下载比较慢）
   npm config set registry  https://registry.npm.taobao.org

## 常用模块介绍

    npm install -g @vue/cli
    npm install less
    npm install less-loader
    npm install vue-loader
    npm install vue-router
    npm install vuex axios iview js-cookie

## assets与static的区别

~~~
相同点：资源在html中使用，都是可以的。

不同点：使用assets下面的资源，在js中使用的话，路径要经过webpack中file-loader编译，路径不能直接写。

assets中的文件会经过webpack打包，重新编译，推荐该方式。而static中的文件，不会经过编译。项目在经过打包后，会生成dist文件夹，static中的文件只是复制一遍而已。简单来说，static中建议放一些外部第三方，自己的放到assets，别人的放到static中。

注意：如果把图片放在assets与static中，html页面可以使用；但在动态绑定中，assets路径的图片会加载失败，因为webpack使用的是commenJS规范，必须使用require才可以。
~~~
