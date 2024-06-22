/**
 * @desc 求职意向
 * @author pengdaokuan
 */
import React from 'react';
import { Container, Title, Content } from '@src/templates/styles/template-one';

function Job() {
  return (
    <Container>
      <Title>求职意向 Work</Title>
      <Content>
        <li>职位：前端工程师</li>
        <li>城市：广州｜成都｜海口</li>
      </Content>
    </Container>
  );
}

export default Job;
