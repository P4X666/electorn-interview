/**
 * @desc 工作经历
 * @author pengdaokuan
 */
import { 
  CommonContent,
  FullWidthWrap,
  ProjectComponentFlexWrap, 
  ProjectComponentLabel, 
  ProjectComponentLeftContent, 
  ProjectComponentList, 
  ProjectComponentRightContent
 } from '@src/templates/styles/template-one';
import React from 'react';

function Work() {
  return (
    <FullWidthWrap>
      <ProjectComponentLabel>工作经历 Post</ProjectComponentLabel>
      <ProjectComponentList>
        <ProjectComponentFlexWrap>
          <ProjectComponentLeftContent>
            <CommonContent>2019.07-至今</CommonContent>
            <CommonContent>前端工程师</CommonContent>
          </ProjectComponentLeftContent>
          <ProjectComponentRightContent>
            <CommonContent>CVTE</CommonContent>
            <CommonContent>就职于CVTE，部门人送广州彭于晏，其他的没啥介绍了</CommonContent>
          </ProjectComponentRightContent>
        </ProjectComponentFlexWrap>
      </ProjectComponentList>
    </FullWidthWrap>
  );
}

export default Work;
