import React from 'react';
import { 
  FullWidthWrap,
  ProjectComponentWrap,
  ProjectComponentLabel,
  ProjectComponentList,
  ProjectComponentItemBox,
  ProjectComponentItemContent,
  ProjectComponentFlexWrap,
  ProjectComponentLeftContent,
  ProjectComponentRightContent
 } from '@src/templates/styles/template-one';


function Project() {
  return (
    <ProjectComponentWrap>
      <ProjectComponentLabel>项目经历 Project</ProjectComponentLabel>
      <ProjectComponentList>
        <ProjectComponentFlexWrap>
          <ProjectComponentLeftContent>
            <p>
              <span>2021.03 - 2021.05</span>
            </p>
          </ProjectComponentLeftContent>
          <ProjectComponentRightContent>
            <p>
              <span>visResumeMook 可视化简历平台 -前端工程师</span>
            </p>
          </ProjectComponentRightContent>
          <FullWidthWrap>
            <ProjectComponentItemBox>
              <ProjectComponentItemContent>
                <span>Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版</span>
              </ProjectComponentItemContent>
              <ProjectComponentItemContent>
                <span>通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档</span>
              </ProjectComponentItemContent>
              <ProjectComponentItemContent>
                <span>通过可视化拖拽形式，自定义组件模版</span>
              </ProjectComponentItemContent>
            </ProjectComponentItemBox>
          </FullWidthWrap>
        </ProjectComponentFlexWrap>
      </ProjectComponentList>
    </ProjectComponentWrap>
  );
}

export default Project;
