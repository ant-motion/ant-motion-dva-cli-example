import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const BgElement = Element.BgElement;
class Banner extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMode;
    const childrenData = [
      {
        title: '<img width="100%" src="https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png" />',
        content: '一个高效的页面动画解决方案',
        button: 'Learn More',
      },
      {
        title: '<img width="100%" src="https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png" />',
        content: '一个高效的页面动画解决方案',
        button: 'Learn More',
      },
    ];
    const childrenToRender = childrenData.map((item, i) => {
      const title = item.title;
      const content = item.content;
      const button = item.button;
      return (<Element
        key={i}
        prefixCls="banner-user-elem"
      >
        <BgElement
          className={`bg bg${i}`}
          key="bg"
        />
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${props.className}-title`}
          key="text"
          id={`${props.id}-wrapperBlock${i}`}
        >
          <span
            className="logo"
            key="logo"
            id={`${props.id}-titleBlock${i}`}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <p
            key="content"
            id={`${props.id}-contentBlock${i}`}
          >
            {content}
          </p>
          <Button
            type="ghost"
            key="button"
            id={`${props.id}-buttonBlock${i}`}
          >
            {button}
          </Button>
        </QueueAnim>
      </Element>);
    });
    return (
      <OverPack
        {...props}
      >
        <TweenOneGroup
          key="banner"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <BannerAnim
            key="banner"
            type="grid"
          >
            {childrenToRender}
          </BannerAnim>
        </TweenOneGroup>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          style={{ bottom: 40 }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

Banner.propTypes = {
  className: PropTypes.string,
};

Banner.defaultProps = {
  className: 'banner1',
};

export default Banner;

