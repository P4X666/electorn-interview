/**
 * @desc 荣誉奖励
 * @author pengdaokuan
 */
import React from 'react';
import { Container, Title, Content } from '@src/templates/styles/template-one';

function Certificate() {
  return (
    <Container>
      <Title>荣誉奖励 Certificate</Title>
      <Content>
        <li>全国英语四级证书</li>
        <li>全国计算机二级证书</li>
        <li>湖南瞎说大学自封骰王</li>
        <li>广州第一届酒王大赛参与奖</li>
      </Content>
    </Container>
  );
}

export default Certificate;
