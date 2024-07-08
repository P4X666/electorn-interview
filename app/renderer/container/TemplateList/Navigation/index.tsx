/*
 * @Description: 模版列表侧边栏
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-06-25 10:12:37
 */
import React, { useEffect, useState } from 'react';
import './index.less';
import UseIcon from '@assets/icon/use.png';
import MyScrollBox from '@common/components/ScrollBox';
import MyButton from '@common/components/Button';
import useTemplateModel from '@src/store/templateModel';

const HEADER_HEIGHT = 92;

function Navigation() {
  
  const [maxHeight, setMaxHeight] = useState(600);
  useEffect(() => {
    const height = document.body.clientHeight;
    setMaxHeight(height - HEADER_HEIGHT);
  }, []);

  const {templateList, selectTemplate} = useTemplateModel()

  return (
    <div styleName="navigation">
      <MyScrollBox maxHeight={maxHeight}>
        {templateList?.length > 0 &&
          templateList.map((template: TSTemplate.Item) => {
            return (
              <div styleName="template" key={template?.templateId}>
                <img styleName="cover" src={template?.templateCover} />
                <div styleName="mask">
                  {selectTemplate?.templateId === template?.templateId && <img styleName="use" src={UseIcon} />}
                  {selectTemplate?.templateId !== template?.templateId && (
                    <MyButton
                      size="middle"
                      className="view-btn"
                      onClick={() => {
                        console.log(1);
                      }}
                    >
                      预览模版
                    </MyButton>
                  )}
                </div>
              </div>
            );
          })}
      </MyScrollBox>
    </div>
  );
}

export default Navigation;
