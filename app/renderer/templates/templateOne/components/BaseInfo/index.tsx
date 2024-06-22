/**
 * @desc 基本信息
 * @author pengdaokuan
 */
import React from 'react';
import { Container, Title, Content } from '@src/templates/styles/template-one';

function BaseInfo() {
  return (
    <Container>
      <Title>基本信息 Basic</Title>
      <Content>
        <li>院校：湖南瞎说大学</li>
        <li>专业：软件工程</li>
        <li>学历：本科</li>
        <li>学年：2015.09 - 2019.06</li>
        <li>籍贯：海南·海口</li>
      </Content>
    </Container>
  );
}

export default BaseInfo;
