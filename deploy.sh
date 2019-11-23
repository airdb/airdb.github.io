#!/bin/bash

cp favicon.ico .vuepress/dist
cd .vuepress/dist || exit -1

echo 'www.airdb.com' > CNAME

git init &&
git add -A  &&
git commit -m"update deploy"
git push -f https://github.com/airdb/airdb.github.io.git master
