# 如何使用：

### 导出文件为 react，

### 将 Home 文件包直接拷到 routes 文件夹下。

### 修改 router.js 里的 IndexPage 的路径: 

```jsx
import IndexPage from './routes/Home';
```

### 如果用的是 antd 的脚手 [dva-cli](https://github.com/dvajs/dva-cli)； dva-cli 的具体教程[请查看](https://github.com/sorrycc/blog/issues/18)，

 [dva-cli-example](https://github.com/ant-motion/ant-motion-dva-cli-example);

> dva-cli ~0.8.0;
> 
> 请不要使用 css-modules, 将在下个版本做混用兼容；
> 在 .roadhogrc 文件里加上: "disableCSSModules": true,
>
> 如果项目已使用 css-modules, 请在项目根目录建 public 目录，这里的文件会被 copy 到输出目录下，然后在 html 文件里引这个文件。

> 或在每个 less 里加上 :global, [详细查看](https://github.com/css-modules/css-modules#usage-with-preprocessors);

### 安装依赖:
```
npm install antd --save;
npm install enquire --save;
npm install rc-queue-anim --save;
npm install rc-scroll-anim --save;
npm install rc-tween-one --save;
npm install rc-banner-anim --save;// 如果用的是多屏滑动型的 banner，加上这条。
```

### 按需加载 antd, 安装 babel-plugin-import:

```
npm install babel-plugin-import --save-dev;
```

### 运用 "babel-plugin-import" 滤镜:

> dva-cli: ~0.8.0， 修改 .roadhogrc，在 "extraBabelPlugins" 里加上： ["import", { "libraryName": "antd", "style": true }][参考](https://github.com/dvajs/dva-example-user-dashboard/blob/master/.roadhogrc#L20)

```
  "extraBabelPlugins": [
    "transform-runtime",
    ["import", { "libraryName": "antd", "style": true }]
  ]
```

### 配置自定义皮肤，[参考](https://ant.design/docs/react/customize-theme-cn) 里面的 package.theme（推荐);

### 在你的 index.html 里的 head 里添加上 <meta name="viewport" content="width=device-width, initial-scale=1.0">。dva-cli 的可以忽略；

### 如果不是 dva-cli 脚手架，去除 index.js 里的 show 相关代码;

```jsx
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
```

