# 服装店铺首页
> 使用Taro框架开发一个简单的服装店铺首页

![](img.png)

## taro安装与使用

- 安装
```bash
npm install -g @tarojs/cli
```
- 初始化项目
```bash
taro init taro-clothesShop

```
- 编译为H5
```bash
npm run dev:h5
```
- 编译为微信小程序
```bash
npm run dev:weapp

```

## taro-ui安装
- 安装
```bash
npm install taro-ui

```
- 使用

[https://taro-ui.aotu.io/#/docs/quickstart](https://taro-ui.aotu.io/#/docs/quickstart)


## Module not found

Module not found: Error: Can't resolve 'XXX' in 'FFF'

```bash
npm i XXX --save
```


## 常用CSS总结
写这个项目，主要是一边学习Taro框架，一遍学习一些常用的CSS

```css
// flex快速布局
display: flex; 
// 方向为横向
flex-direction: row;
// 方向为竖向
flex-direction: column; 
// 使内部组件均匀分布
justify-content: space-between; 
// 设置组件层级，以面向我方向为正方向
z-index: 2; 
// 设置图片模糊
filter: blur(2px); 
// 设置圆角，50%为圆形
border-radius: 8PX;
// 字体加粗
font-weight: bold;
// 设置一行的高度(一般跟随height)
line-height: 40PX;
```
