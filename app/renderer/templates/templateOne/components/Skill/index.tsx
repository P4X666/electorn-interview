/**
 * @desc 技能
 * @author pengdaokuan
 */
import React from 'react';
import { FullWidthWrap, SkillItemWrap, SkillLableWrap, SkillListWrap } from '@src/templates/styles/template-one';

function Skill() {
  return (
    <FullWidthWrap>
      <SkillLableWrap>技能证书 Skill</SkillLableWrap>
      <SkillListWrap>
        <SkillItemWrap>熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码</SkillItemWrap>
        <SkillItemWrap>熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码，开发 rc-redux-model 中间件</SkillItemWrap>
        <SkillItemWrap>阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库</SkillItemWrap>
        <SkillItemWrap>了解 Vscode，开发组内项目辅助工具 vscode-beehive-extension 插件</SkillItemWrap>
        <SkillItemWrap>了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件</SkillItemWrap>
        <SkillItemWrap>了解 Electron，了解 Node.js 以及 Git 团队协作开发工具</SkillItemWrap>
        <SkillItemWrap>解设计模式，对于特定场景，能采用合适的设计模式进行解决</SkillItemWrap>
        <SkillItemWrap>了解 MYSQL，了解数据库优化常用方法</SkillItemWrap>
        <SkillItemWrap>了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识</SkillItemWrap>
      </SkillListWrap>
    </FullWidthWrap>
  );
}

export default Skill;
