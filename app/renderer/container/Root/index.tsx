import React from 'react';
import { shell } from 'electron';
import Logo from "../../../assets/logo.png";
import { useNavigate } from 'react-router';
import './index.less';

const RouteTextArr = ['介绍', '简历', '源码'] as const

function Root() {
  const navigate = useNavigate();

  const onRouterToLink = (text: string) => {
    if (text === RouteTextArr[1]) {
      navigate('/resume');
    } else {
      shell.openExternal('https://github.com/P4X666/electorn-interview');
    }
  };
  return <div styleName="root">
  <div styleName="container">
    <img src={Logo} alt="" />
    <div styleName="title">electron</div>
    <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
    <div styleName="action">
      {RouteTextArr.map((text, index) => {
        return (
          <div key={index} styleName="item" onClick={() => onRouterToLink(text)}>
            {text}
          </div>
        );
      })}
    </div>
    <div styleName="copyright">
      <div styleName="footer">
        <p styleName="copyright">
          Copyright © 2024-{new Date().getFullYear()} All Rights Reserved. Copyright By pengshixing
        </p>
      </div>
    </div>
  </div>
</div>;
}
export default Root;