## Vue-项目-重点



#### 01-项目-准备-项目目录说明

1. src/
2. build/ webpack相关代码
3. config/ 本地服务器配置

#### 02-项目-准备-代码规范-自定义指令

1. 结尾没有;
2. 必须使用全等===
3. 不能有冗余变量
4. 

> 关闭eslint build/webpack.base.conf.js中注释掉  ...(config.dev.useEslint ? [createLintingRule()] : []),

#### 03-项目-准备-element ui-文档分析

#### 04-项目-准备-element ui-安装引入
//引入element-ui
import ElementUI from 'element-ui'
//引入样式文件
import 'element-ui/lib/theme-chalk/index.css'

#### 05-项目-准备-项目模板简化-调整

#### 06-项目-准备-git版本控制
1. git init
2. git status
3. git add .
4. git commit -m "park"
5. 新建远程仓库
6. git remote add origin git@github.com:dzx747423188/juhaowl.git
7. git push -u origin master （之后直接git push）
#### 07-项目-项目-登录-新建分支
> 新建分支 git checkout -b dev-login
> 新建组件 路由等
#### 01-项目-准备