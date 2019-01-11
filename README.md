# 服装店铺首页
> 使用Taro框架开发一个简单的服装店铺首页

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

## 常用CSS总结
写这个项目，主要是一边学习Taro框架，一遍学习一些常用的CSS

```css

display: flex; // flex快速布局
flex-direction: row; // 方向为横向
flex-direction: column; // 方向为竖向
justify-content: space-between; // 使内部组件均匀分布
z-index: 2; // 设置组件层级，以面向我方向为正方向
filter: blur(2px); // 设置图片模糊
border-radius: 8PX; // 设置圆角，50%为圆形
```
