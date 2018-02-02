import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import ScrollAnim from 'rc-scroll-anim';

import Nav from './Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Footer from './Footer';
import Point from './Point';

import './less/antMotion_style.less';

const scrollScreen = ScrollAnim.scrollScreen;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false,
      show: !location.port,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    const children = [
      <Nav id="nav_0_0" key="nav_0_0" isMode={this.state.isMode} />,
      <Content0 id="content_10_0" key="content_10_0" isMode={this.state.isMode} />,
      <Content1 id="content_2_0" key="content_2_0" isMode={this.state.isMode} />,
      <Content2 id="content_3_0" key="content_3_0" isMode={this.state.isMode} />,
      <Content3 id="content_4_0" key="content_4_0" isMode={this.state.isMode} />,
      <Footer id="footer_0_0" key="footer_0_0" isMode={this.state.isMode} />,
       // 导航和页尾不进入锚点区，如果需要，自行添加;
      <Point key="list" ref="list" data={['content_10_0', 'content_2_0', 'content_3_0', 'content_4_0']} />,
    ];
    return (
      <div className="templates-wrapper">
        {this.state.show && children}
      </div>
    );
  }
}
