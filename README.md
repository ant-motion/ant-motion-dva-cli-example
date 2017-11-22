# ant-motion-dva-cli-example

[ant motion](https://motion.ant.design/) 的首页在 [dva-cli](https://github.com/dvajs/dva-cli)0.8.0 里运行的例子

请参照[documentation](https://github.com/ant-motion/ant-motion-dva-cli-example/blob/2.0/src/routes/Home/documentation.md)里的步骤。。

### 2.0 的改动

2.0 里的改动是依据 dva 2.x 脚手架的改动而改动，如果不是 dva-cli 脚手架，去除 index.js 里的 show 相关代码：

1. stage 里的 [show](https://github.com/ant-motion/ant-motion-dva-cli-example/blob/2.0/src/routes/Home/index.jsx#L20);
2. didMount 里的 [if 处理](https://github.com/ant-motion/ant-motion-dva-cli-example/blob/2.0/src/routes/Home/index.jsx#L29-L37)
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

3. return 里 [children 的处理](https://github.com/ant-motion/ant-motion-dva-cli-example/blob/2.0/src/routes/Home/index.jsx#L64), 替换为 `{children}`

0.7.8 例子请切回 [master](https://github.com/ant-motion/ant-motion-dva-cli-example/tree/master)

