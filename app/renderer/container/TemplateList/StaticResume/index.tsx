/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-06-25 09:10:36
 */
import React, { useEffect, useState } from 'react';
import './index.less';
import * as TemplateList from '@src/templates';
import Footer from '../Footer';
import MyScrollBox from '@common/components/ScrollBox';

const HEADER_HEIGHT = 76; // 距离头部距离

function StaticResume() {
  const [maxHeight, setMaxHeight] = useState(600);
  useEffect(() => {
    const height = document.body.clientHeight;
    setMaxHeight(height - HEADER_HEIGHT);
  }, []);

  return (
    <div styleName="container">
      <MyScrollBox maxHeight={maxHeight}>
        <TemplateList.TemplateOne />
        <Footer />
      </MyScrollBox>
    </div>
  );
}

export default StaticResume;
