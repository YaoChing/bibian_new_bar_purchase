#!/bin/bash

# 此檔案僅能使用於linux中

serviceSerial=$1
projectPath='/opt/html/bibian_new_bar'
nowPath=`pwd`

if [ $nowPath != $projectPath ]; then
  if [ ! -d $projectPath ]; then
    echo "dir is not exist"
    `mkdir $projectPath`
  fi
fi

if [ ! -d $projectPath/src ]; then
  `mkdir $projectPath/src`
fi

if [ ! -f $projectPath/src/$serviceSerial.ts ]; then
  `touch $projectPath/src/$serviceSerial.ts`
fi

if [ ! -d $projectPath/src/renders ]; then
  `mkdir $projectPath/src/renders`
fi

if [ ! -d $projectPath/src/renders/$serviceSerial ]; then
  `mkdir $projectPath/src/renders/$serviceSerial`
fi

if [ ! -d $projectPath/src/renders/$serviceSerial/configs ]; then
  `mkdir $projectPath/src/renders/$serviceSerial/configs`
fi

if [ ! -d $projectPath/src/renders/$serviceSerial/libs ]; then
  `mkdir $projectPath/src/renders/$serviceSerial/libs`
fi

if [ ! -d $projectPath/src/renders/$serviceSerial/views ]; then
  `mkdir $projectPath/src/renders/$serviceSerial/views`
fi

if [ ! -f $projectPath/src/renders/$serviceSerial/index.ts ]; then
  `touch $projectPath/src/renders/$serviceSerial/index.ts`
fi

echo "init is ok"